import { ModelCardType } from '@/components/ModelCard/ModelCard.type';
import { BaseModel, Receipt } from '@/logic/apis';
import { ModelCard } from '@/components/ModelCard/ModelCard';
import {
  IRepositoryProps,
  withRepository,
} from '@/logic/apis/database/withRepository';
import React from 'react';

const Card = (props: IRepositoryProps<BaseModel<any>>) => {
  return (
    <ModelCard {...props} modelName={Receipt.name} createPath={'/(app)/old'} />
  );
};

export const ReceiptCard = withRepository(Card, {
  repository: (database) => database.receipts,
});
