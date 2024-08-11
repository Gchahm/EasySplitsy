import * as React from "react";
import {Receipt} from "../components/Receipt/Receipt";
import {Participants} from "../components/Participants/Participants";
import {useContext} from "react";
import {BillContext, IBillContext} from "../businessLogic/billState";

export const BillController: React.FC = () => {
    const {participants, selectedParticipant, billItems, ...reducer} = useContext<IBillContext>(BillContext);

    return (
        <>
            <Participants selectedParticipant={selectedParticipant} participants={participants}
                          onParticipantChange={reducer.setSelectedParticipantId}/>
            <Receipt items={billItems} title={"full bill"} onItemClick={reducer.moveItemToParticipant}/>
            {selectedParticipant?.items && selectedParticipant.items.length > 0 &&
                <Receipt items={selectedParticipant.items} title={"full bill"} onItemClick={reducer.moveItemToBill}/>}
        </>
    );
}