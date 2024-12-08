import { BaseModel, Contact, Receipt } from '@/logic/database/models';
import { IDatabaseService, IRepository } from '@/logic/database/service.types';
import { IBaseModel, IContact, IReceipt } from '@/logic/database/models.types';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export class FireBaseRepository<
  TDataModel extends IBaseModel,
  TAppModel extends BaseModel<TDataModel>,
> implements IRepository<TAppModel> {
  constructor(
    private readonly _collectionReference: FirebaseFirestoreTypes.CollectionReference<TDataModel>,
    private readonly _toAppModel: (dataModel: TDataModel, id: string) => TAppModel
  ) {
  }

  public subscribe(callback: (models: TAppModel[]) => void): () => void {
    return this._collectionReference.onSnapshot((doc) => {
      callback(doc.docs.map((doc) => this._toAppModel(doc.data(), doc.id)));
    });
  }

  public async get(id: string): Promise<TAppModel | undefined> {
    return this._collectionReference.doc(id).get().then((doc) => {
      if (doc.exists) {
        return this._toAppModel(doc.data()!, doc.id);
      } else {
        return undefined;
      }
    });
  }

  public async getAll(): Promise<TAppModel[]> {
    return this._collectionReference.get().then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => this._toAppModel(doc.data(), doc.id));
    });
  }

  public async create(model: TAppModel): Promise<void> {
    await this._collectionReference.add(model.model);
  }

  public async update(id: string, model: TAppModel): Promise<void> {
    await this._collectionReference.doc(id).update(model.model);
  }

  public async delete(id: string): Promise<void> {
    await this._collectionReference.doc(id).delete();
  }
}

export class FirebaseDataBaseProvider implements IDatabaseService {
  private readonly _contacts: IRepository<Contact>;
  private readonly _receipts: IRepository<Receipt>;

  constructor(userId: string) {
    this._contacts = new FireBaseRepository(
      firestore().collection<IContact>(`users/${userId}/contacts`),
      (dataModel, id) => new Contact(dataModel, id)
    );
    this._receipts = new FireBaseRepository(
      firestore().collection<IReceipt>(`users/${userId}/receipts`),
      (dataModel, id) => new Receipt(dataModel, id)
    );
  }

  public get contacts() {
    return this._contacts;
  }

  public get receipts() {
    return this._receipts;
  }
}
