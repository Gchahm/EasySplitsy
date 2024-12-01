import { Contact, Receipt } from '@/logic/apis/database/models';

export interface IRepository<TAppModel> {
  get: (id: string) => Promise<TAppModel | undefined>;
  getAll: () => Promise<TAppModel[]>;
  create: (model: TAppModel) => Promise<void>;
  update: (id: string, model: TAppModel) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

export interface IDatabaseService {
  contacts: IRepository<Contact>;
  receipts: IRepository<Receipt>;
}
