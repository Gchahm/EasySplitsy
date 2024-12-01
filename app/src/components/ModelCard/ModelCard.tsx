import { BaseModel } from '@/logic/apis';
import { ListView } from '@/components/ListView';
import { Filler } from '@/components';
import React from 'react';
import { CardContent } from '@/components/ModelCard/CardContent';
import { ModelCardType } from '@/components/ModelCard/ModelCard.type';
import { EmptyCardContent } from '@/components/ModelCard/EmptyCardContent';

export const ModelCard = (props: ModelCardType<BaseModel<any>>) => {
  const { data, loading } = props;

  return (
    <ListView>
      {loading ? (
        <Filler />
      ) : data.length === 0 ? (
        <EmptyCardContent />
      ) : (
        <CardContent data={data} />
      )}
    </ListView>
  );
};
