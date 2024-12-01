import { ModelCardType } from '@/components/ModelCard/ModelCard.type';
import { Contact } from '@/logic/apis';
import { withRepository } from '@/logic/apis/database/withRepository';
import React from 'react';
import { ModelCard } from '@/components/ModelCard/ModelCard';

const Card = (props: ModelCardType<Contact>) => {
  return <ModelCard {...props} />;
};

export const ContactCard = withRepository(Card);
