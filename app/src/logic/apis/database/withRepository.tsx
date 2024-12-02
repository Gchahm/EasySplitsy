import { BaseModel, IDatabaseService, IRepository } from '@/logic/apis';
import * as React from 'react';
import { useDatabase } from '@/logic/apis/DatabaseContextProvider';

export interface IRepositoryProps<TAppModel extends BaseModel<any>> {
  data: TAppModel[];
  loading: boolean;
}

export interface IRepositorySelectorProps<TAppModel> {
  repository: (database: IDatabaseService) => IRepository<TAppModel>;
}

export const withRepository = <TAppModel extends BaseModel<any>>(
  Component: React.ComponentType<IRepositoryProps<TAppModel>>,
  props: IRepositorySelectorProps<TAppModel>,
) => {
  return () => {
    const database = useDatabase();

    const [data, setData] = React.useState<TAppModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
      if (!database.database) {
        return;
      }

      const unsub = props.repository(database.database).subscribe((data) => {
        setData(data);
        setLoading(false);
      });

      return () => {
        unsub();
      };
    }, [database]);

    return <Component {...props} data={data} loading={loading} />;
  };
};
