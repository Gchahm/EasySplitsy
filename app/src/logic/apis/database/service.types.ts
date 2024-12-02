import { Contact, Receipt } from '@/logic/apis/database/models';

declare interface Unsubscribe {
  /** Removes the listener when invoked. */
  (): void;
}

/**
 * Update data (for use with {@link (updateDoc:1)}) that consists of field paths
 * (e.g. 'foo' or 'foo.baz') mapped to values. Fields that contain dots
 * reference nested fields within the document. FieldValues can be passed in
 * as property values.
 */

export interface IRepository<TAppModel> {
  subscribe: (callback: (models: TAppModel[]) => void) => Unsubscribe;
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
