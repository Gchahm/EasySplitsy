import * as React from "react";
import { useContext } from "react";
import { Receipt } from "../components/Receipt/Receipt";
import { BillContext, IBillContext } from "../businessLogic/billState";
import { ScreenContainer } from "../components/screenContainer";
import { MobileContainer } from "../components/StyledMUI/MobileContainer.ts";
import { ParticipantReceiptHeader } from "../components/participantReceiptHeader";

let id = 0;
export const BillController: React.FC = () => {
  const { participants, selectedParticipant, items, bill, ...reducer } =
    useContext<IBillContext>(BillContext);

  const [participantName, setParticipantName] = React.useState<string>("");

  const handleAddParticipant = () => {
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

  const handleLeftClick = () => {
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

  const handleRightClick = () => {
    const index = participants.indexOf(selectedParticipant);
    if (index < participants.length - 1) {
      reducer.setSelectedParticipantId(participants[index + 1].id);
    } else {
      reducer.setSelectedParticipantId(undefined);
    }
  };

  const isLeftDisabled =
    participants.length === 0 ||
    (selectedParticipant && participants.indexOf(selectedParticipant) === 0);

  const isRightDisabled = !selectedParticipant;

  return (
    <ScreenContainer>
      <MobileContainer height={"100%"}>
        <MobileContainer height={"50%"} padding={12}>
          <Receipt
            headerContent={
              <ParticipantReceiptHeader
                selectedParticipant={selectedParticipant}
                participantName={participantName}
                isLeftButtonDisabled={isLeftDisabled}
                isRightButtonDisabled={isRightDisabled}
                setParticipantName={setParticipantName}
                onAddParticipant={handleAddParticipant}
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
              />
            }
            items={items}
            itemCount={selectedParticipant?.items || {}}
            onItemClicked={reducer.moveItemToBill}
          />
        </MobileContainer>
        <MobileContainer height={"50%"} padding={12}>
          <Receipt
            headerContent={"Remaining in receipt"}
            items={items}
            itemCount={bill}
            onItemClicked={reducer.moveItemToParticipant}
          />
        </MobileContainer>
      </MobileContainer>
    </ScreenContainer>
  );
};
