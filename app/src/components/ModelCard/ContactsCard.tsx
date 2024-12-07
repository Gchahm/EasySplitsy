import React from 'react';
import { ModelCard } from '@/components/ModelCard/ModelCard';
import { useDatabase } from '@/logic/database/DatabaseContextProvider';
import { Contact } from '@/logic/database';

export type ContactCardProps = {
  onSelectedChange?: (selected: Contact[]) => void;
};

export const ContactCard = (props: ContactCardProps) => {
  const { onSelectedChange } = props;
  const database = useDatabase();
  const [selected, setSelected] = React.useState<Contact[] | undefined>(
    onSelectedChange ? [] : undefined
  );

  return (
    <ModelCard
      selected={selected}
      setSelected={setSelected}
      data={database.contacts}
      loading={false}
      modelName={Contact.name}
      createPath={'/contacts/create'}
    />
  );
};
