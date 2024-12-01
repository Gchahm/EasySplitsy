import { ModelCardType } from '@/components/ModelCard/ModelCard.type';
import { Receipt } from '@/logic/apis';
import { ModelCard } from '@/components/ModelCard/ModelCard';
import { withRepository } from '@/logic/apis/database/withRepository';
import React from 'react';

const Card = (props: ModelCardType<Receipt>) => {
  return <ModelCard {...props} />;
};

export const ReceiptCard = withRepository(Card);
