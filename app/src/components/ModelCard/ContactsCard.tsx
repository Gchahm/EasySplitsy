import React from 'react';
import { ModelCard } from '@/components/ModelCard/ModelCard';
import { useDatabase } from '@/logic/apis/DatabaseContextProvider';

export const ContactCard = () => {
  const database = useDatabase();
  return (
    <ModelCard
      data={database.contacts}
      loading={false}
      modelName={ContactCard.name}
      createPath={'/contacts/create'}
    />
  );
};
