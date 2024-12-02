import { Receipt } from '@/logic/apis';
import { ModelCard } from '@/components/ModelCard/ModelCard';
import React from 'react';
import { useDatabase } from '@/logic/apis/DatabaseContextProvider';

export const ReceiptCard = () => {
  const database = useDatabase();
  return (
    <ModelCard
      data={database.receipts}
      loading={false}
      modelName={Receipt.name}
      createPath={'/(app)/old'}
    />
  );
};
