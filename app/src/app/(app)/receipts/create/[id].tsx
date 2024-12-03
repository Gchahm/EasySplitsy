import React from 'react';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { ContactCard } from '@/components/ModelCard';
import { Contact } from '@/logic/apis';

export default function CreateNewReceipt() {
  const [contacts, setContacts] = React.useState<Contact[]>([]);

  return (
    <ThemedSafeAreaView>
      <ContactCard onSelectedChange={setContacts} />
    </ThemedSafeAreaView>
  );
}
