import { EmptyCardContentProps } from '@/components/ModelCard/EmptyCardContent';
import { CardContentType } from '@/components/ModelCard/CardContent';
import { BaseModel } from '@/logic/database';

export type ModelCardType<TAppModel extends BaseModel<any>> =
  CardContentType<TAppModel> &
    EmptyCardContentProps & {
      loading: boolean;
    };
