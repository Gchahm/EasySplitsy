import { IParticipantReceiptHeaderProps } from "../../components/participantReceiptHeader";
import * as React from "react";
import { useBill } from "easy-splitsy-logic";

export const useManageRecipientHeaderProps =
  (): IParticipantReceiptHeaderProps => {
    const { participants, selectedParticipant, ...reducer } = useBill();
    const [participantName, setParticipantName] = React.useState<string>("");

    const onAddParticipant = () => {
      reducer.addPerson([
        {
          name: participantName,
        },
      ]);
      setParticipantName("");
    };

    const onLeftClick = () => {
      if (!selectedParticipant) {
        reducer.setSelectedParticipantId(
          participants[participants.length - 1].id,
        );
      } else {
        const index = participants.indexOf(selectedParticipant);
        if (index > 0) {
          reducer.setSelectedParticipantId(participants[index - 1].id);
        }
      }
    };

    const onRightClick = () => {
      if (selectedParticipant) {
        const index = participants.indexOf(selectedParticipant);
        if (index < participants.length - 1) {
          reducer.setSelectedParticipantId(participants[index + 1].id);
        } else {
          reducer.setSelectedParticipantId(undefined);
        }
      }
    };

    const isLeftButtonDisabled: boolean =
      participants.length === 0 ||
      (!!selectedParticipant &&
        participants.indexOf(selectedParticipant) === 0);

    const isRightButtonDisabled = !selectedParticipant;

    return {
      selectedParticipant,
      participantName,
      isLeftButtonDisabled,
      isRightButtonDisabled,
      setParticipantName,
      onAddParticipant,
      onLeftClick,
      onRightClick,
    };
  };
