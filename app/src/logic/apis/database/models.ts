import {
  IBaseModel,
  IContact,
  IReceipt,
} from '@/logic/apis/database/models.types';

export abstract class BaseModel<T extends IBaseModel> {
  private _id: string | undefined;

  protected constructor(
    private _dbModel: T,
    id?: string,
  ) {
    this._id = id;
  }

  public get model(): T {
    return this._dbModel;
  }

  get id(): string | undefined {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  abstract toString(): string;
}

export class Contact extends BaseModel<IContact> {
  constructor(model: IContact, id?: string) {
    super(model, id);
  }

  public toString(): string {
    return `${this.model.name}`;
  }
}

export class Receipt extends BaseModel<IReceipt> {
  constructor(model: IReceipt, id?: string) {
    super(model, id);
  }

  public toString(): string {
    return `${this.model.name}`;
  }
}
