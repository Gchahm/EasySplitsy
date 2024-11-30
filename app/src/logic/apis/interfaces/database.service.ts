import { IBaseModel, IContact } from '@/logic/apis/interfaces';

export interface IRepository<TModel extends IBaseModel> {
  get: (id: string) => Promise<TModel | undefined>;
  getAll: () => Promise<TModel[]>;
  create: (model: Omit<TModel, 'id'>) => Promise<TModel>;
  update: (id: string, model: TModel) => Promise<TModel>;
  delete: (id: string) => Promise<void>;
}

export interface IDatabaseService {
  contacts: IRepository<IContact>;
}
