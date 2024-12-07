import { ModelCard } from '@/components/ModelCard/ModelCard';
import React from 'react';
import { useDatabase } from '@/logic/database/DatabaseContextProvider';
import { Receipt } from '@/logic/database';

export const ReceiptCard = () => {
  const database = useDatabase();
  return (
    <ModelCard
      data={database.receipts}
      loading={false}
      modelName={Receipt.name}
      createPath={'/receipts/create'}
    />
  );
};
