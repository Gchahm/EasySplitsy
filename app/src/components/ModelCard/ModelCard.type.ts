import { EmptyCardContentProps } from '@/components/ModelCard/EmptyCardContent';
import { CardContentType } from '@/components/ModelCard/CardContent';
import { BaseModel } from '@/logic/apis';

export type ModelCardType<TAppModel extends BaseModel<any>> =
  CardContentType<TAppModel> &
    EmptyCardContentProps & {
      loading: boolean;
    };
