import React from 'react';
import { ContactCard } from '@/components/ModelCard';
import { Contact } from '@/logic/database';

export default function CreateNewReceipt() {
  const [contacts, setContacts] = React.useState<Contact[]>([]);

  return (
    <ContactCard />
  );
}
