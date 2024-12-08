import React from 'react';
import { ModelCard } from '@/components/ModelCard/ModelCard';
import { useDatabase } from '@/logic/database/DatabaseContextProvider';
import { Contact } from '@/logic/database';
import { SelectionProps } from '@/components/ModelCard/CardContent';

export type ContactCardProps = {
  selectionProps?: SelectionProps
};

export const ContactCard = (props: ContactCardProps) => {
  const database = useDatabase();

  return (
    <ModelCard
      selectionProps={props.selectionProps}
      data={database.contacts}
      loading={false}
      modelName={Contact.name}
      createPath={'/contacts/create'}
    />
  );
};
