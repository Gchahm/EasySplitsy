import {
  IBaseModel,
  IContact,
  IReceipt,
} from '@/logic/apis/database/models.types';

export abstract class BaseModel<T extends IBaseModel> {
  protected constructor(private _dbModel: T) {}

  public get model(): T {
    return this._dbModel;
  }

  abstract toString(): string;
}

export class Contact extends BaseModel<IContact> {
  constructor(model: IContact) {
    super(model);
  }

  public toString(): string {
    return `Contact: ${this.model.name}`;
  }
}

export class Receipt extends BaseModel<IReceipt> {
  constructor(model: IReceipt) {
    super(model);
  }

  public toString(): string {
    return `Receipt: ${this.model.name}`;
  }
}
