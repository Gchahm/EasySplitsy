import { IRepository } from '@/logic/apis';
import * as React from 'react';

export interface IRepositoryProps<TAppModel> {
  data: TAppModel[];
  loading: boolean;
}

export interface IRepositorySelectorProps<TAppModel> {
  repository: IRepository<TAppModel>;
}

export const withRepository = <TAppModel,>(
  Component: React.ComponentType<IRepositoryProps<TAppModel>>,
) => {
  return (props: IRepositorySelectorProps<TAppModel>) => {
    const { repository } = props;

    const [data, setData] = React.useState<TAppModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    const populateData = async () => {
      const data = await repository.getAll();
      setData(data);
      setLoading(false);
    };

    React.useEffect(() => {
      void populateData();
    }, []);

    return <Component {...props} data={data} loading={loading} />;
  };
};
