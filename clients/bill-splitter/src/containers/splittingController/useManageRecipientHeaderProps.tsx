import { IParticipantReceiptHeaderProps } from "../../components/participantReceiptHeader";
import * as React from "react";
import { useContext } from "react";
import { BillContext, IBillContext } from "../../businessLogic/billState";

let id = 0;
export const useManageRecipientHeaderProps =
  (): IParticipantReceiptHeaderProps => {
    const { participants, selectedParticipant, ...reducer } =
      useContext<IBillContext>(BillContext);
    const [participantName, setParticipantName] = React.useState<string>("");

    const onAddParticipant = () => {
      reducer.addParticipants([
        {
          id: (id++).toString(),
          name: participantName,
          total: 0,
          items: {},
        },
      ]);
      setParticipantName("");
      reducer.setSelectedParticipantId((id - 1).toString());
    };

    const onLeftClick = () => {
      if (!selectedParticipant) {
        reducer.setSelectedParticipantId(
          participants[participants.length - 1].id,
        );
      }
      const index = participants.indexOf(selectedParticipant);
      if (index > 0) {
        reducer.setSelectedParticipantId(participants[index - 1].id);
      }
    };

    const onRightClick = () => {
      const index = participants.indexOf(selectedParticipant);
      if (index < participants.length - 1) {
        reducer.setSelectedParticipantId(participants[index + 1].id);
      } else {
        reducer.setSelectedParticipantId(undefined);
      }
    };

    const isLeftButtonDisabled =
      participants.length === 0 ||
      (selectedParticipant && participants.indexOf(selectedParticipant) === 0);

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
