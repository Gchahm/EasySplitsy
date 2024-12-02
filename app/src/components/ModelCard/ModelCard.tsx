import { ListView } from '@/components/ListView';
import { Filler } from '@/components';
import React from 'react';
import { CardContent } from '@/components/ModelCard/CardContent';
import { ModelCardType } from '@/components/ModelCard/ModelCard.type';
import { EmptyCardContent } from '@/components/ModelCard/EmptyCardContent';
import { Button } from '@rneui/themed';
import { router } from 'expo-router';
import { BaseModel } from '@/logic/apis';

export const ModelCard = (props: ModelCardType<BaseModel<any>>) => {
  const { data, loading } = props;

  return (
    <>
      {data.length && (
        <Button onPress={() => router.navigate(props.createPath)}>
          add new {props.modelName}
        </Button>
      )}
      <ListView>
        {loading ? (
          <Filler />
        ) : data.length === 0 ? (
          <EmptyCardContent {...props} />
        ) : (
          <CardContent data={data} />
        )}
      </ListView>
    </>
  );
};
