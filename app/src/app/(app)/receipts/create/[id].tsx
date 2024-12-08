import React from 'react';
import { ContactCard } from '@/components/ModelCard';
import { useAppDispatch, useAppSelector } from '@/logic';
import { createReceiptActions, selectContacts } from '@/logic/store/createReceipt';

export default function CreateNewReceipt() {
  const contacts = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();

  const handleOnSelect = (id: string) => {
    dispatch(createReceiptActions.addContact(id));
  };

  console.log('contacts', contacts);


  return (
    <ContactCard selectionProps={{
      selected: contacts,
      onItemPress: handleOnSelect
    }} />
  );
}
