import {
  IBaseModel,
  IContact,
  IReceipt,
} from '@/logic/apis/database/models.types';
import { BaseModel, Contact, Receipt } from '@/logic/apis/database/models';

export interface IRepository<
  TDataModel extends IBaseModel,
  TAppModel extends BaseModel<TDataModel>,
> {
  get: (id: string) => Promise<TAppModel | undefined>;
  getAll: () => Promise<TAppModel[]>;
  create: (model: TAppModel) => Promise<void>;
  update: (id: string, model: TAppModel) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

export interface IDatabaseService {
  contacts: IRepository<IContact, Contact>;
  receipts: IRepository<IReceipt, Receipt>;
}
