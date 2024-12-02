import { ModelCardType } from '@/components/ModelCard/ModelCard.type';
import { BaseModel, Contact } from '@/logic/apis';
import {
  IRepositoryProps,
  withRepository,
} from '@/logic/apis/database/withRepository';
import React from 'react';
import { ModelCard } from '@/components/ModelCard/ModelCard';

const Card = (props: IRepositoryProps<BaseModel<any>>) => {
  return (
    <ModelCard
      {...props}
      modelName={ContactCard.name}
      createPath={'/contacts/create'}
    />
  );
};

export const ContactCard = withRepository(Card, {
  repository: (database) => database.contacts,
});
