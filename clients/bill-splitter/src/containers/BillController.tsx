import * as React from "react";
import { useContext } from "react";
import { Receipt } from "../components/Receipt/Receipt";
import { Participants } from "../components/Participants/Participants";
import { BillContext, IBillContext } from "../businessLogic/billState";
import { AddParticipantForm } from "../components/addParticipantForm";
import { ScreenContainer } from "../components/screenContainer";

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

  // const billTotal = items.reduce(
  //   (acc, item) => acc + item.price * (bill[item.id] || 0),
  //   0,
  // );

  return (
    <ScreenContainer
      header={
        <>
          <AddParticipantForm
            name={participantName}
            onNameChange={setParticipantName}
            onAddParticipant={handleAddParticipant}
          />
          <Participants
            selectedParticipant={selectedParticipant}
            participants={participants}
            onParticipantChange={reducer.setSelectedParticipantId}
          />
        </>
      }
    >
      <Receipt />
    </ScreenContainer>
  );
};