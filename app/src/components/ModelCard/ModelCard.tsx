import { ListView } from '@/components/ListView';
import { Filler } from '@/components';
import React from 'react';
import { CardContent } from '@/components/ModelCard/CardContent';
import { ModelCardType } from '@/components/ModelCard/ModelCard.type';
import { EmptyCardContent } from '@/components/ModelCard/EmptyCardContent';
import { Button } from '@rneui/themed';
import { router } from 'expo-router';
import { BaseModel } from '@/logic/database';

export const ModelCard = (props: ModelCardType<BaseModel<any>>) => {
  const { data, loading } = props;

  return (
    <>
      {data.length ? (
        <Button title={`add new ${props.modelName}`} onPress={() => router.navigate(props.createPath)} />
      ) : <></>}
      <ListView>
        {loading ? (
          <Filler />
        ) : data.length ? (
          <CardContent {...props} />
        ) : (
          <EmptyCardContent {...props} />
        )}
      </ListView>
    </>
  );
};
