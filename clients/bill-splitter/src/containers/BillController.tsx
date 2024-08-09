import {useBillReducer} from "../businessLogic/billState";
import {IBillItem} from "../interfaces/IBillItem";
import * as React from "react";
import {Receipt} from "../components/Receipt/Receipt";
import {IParticipant} from "../interfaces/IParticipant";
import {Participants} from "../components/Participants/Participants";

const initialBill: IBillItem[] = [
    {
        id: '1',
        name: 'Frozen yoghurt',
        value: 159,
        quantity: 6,
    },
    {
        id: '2',
        name: 'Ice cream sandwich',
        value: 237,
        quantity: 2,
    },
    {
        id: '3',
        name: 'Eclair',
        value: 262,
        quantity: 16,
    },
    {
        id: '4',
        name: 'Cupcake',
        value: 305,
        quantity: 3,
    },
    {
        id: '5',
        name: 'Gingerbread',
        value: 356,
        quantity: 16,
    },
];

const initialParticipants: IParticipant[] = [
    {
        id: '1',
        name: 'John',
    },
    {
        id: '2',
        name: 'Jane',
    },
    {
        id: '3',
        name: 'Doe',
    },
    {
        id: '4',
        name: 'Smith',
    },
    {
        id: '5',
        name: 'Doe',
    },
];

export const BillController: React.FC = () => {

    const {billItems, participants, selectedParticipant, ...reducer} = useBillReducer();

    React.useEffect(() => {
        reducer.setBill(initialBill);
        reducer.addParticipants(initialParticipants);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Participants selectedParticipant={selectedParticipant} participants={participants}
                          onParticipantChange={reducer.setSelectedParticipantId}/>
            <Receipt items={billItems} title={"full bill"} onItemClick={reducer.moveItemToParticipant}/>
            {selectedParticipant && selectedParticipant.items.length > 0 &&
                <Receipt items={selectedParticipant.items} title={"full bill"} onItemClick={reducer.moveItemToBill}/>}
        </>
    );
}