import {
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  Firestore,
  FirestoreDataConverter,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  setDoc,
  SnapshotOptions,
} from '@firebase/firestore';

import { firebaseApp } from '@/logic/apis/firebase/core';
import { BaseModel, Contact, Receipt } from '@/logic/apis/database/models';
import {
  IDatabaseService,
  IRepository,
} from '@/logic/apis/database/service.types';
import {
  IBaseModel,
  IContact,
  IReceipt,
} from '@/logic/apis/database/models.types';

export class FireBaseRepository<
  TDataModel extends IBaseModel,
  TAppModel extends BaseModel<TDataModel>,
> implements IRepository<TDataModel, TAppModel>
{
  private readonly _models: Record<string, TAppModel>;
  private readonly isLoaded: boolean = false;

  constructor(
    private readonly _collectionReference: CollectionReference<
      TAppModel,
      TDataModel
    >,
  ) {
    this._models = {};
  }

  public async get(id: string): Promise<TAppModel | undefined> {
    const docRef = doc(this._collectionReference, id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  public async getAll(): Promise<TAppModel[]> {
    if (!this.isLoaded) {
      const q = query(this._collectionReference);
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((doc) => {
        this._models[doc.id] = doc.data();
      });
    }

    return Object.values(this._models);
  }

  public async create(model: TAppModel): Promise<void> {
    const docRef = doc(this._collectionReference);
    await setDoc(docRef, model);
    this._models[docRef.id] = model;
  }

  public async update(id: string, model: TAppModel): Promise<void> {
    const docRef = doc(this._collectionReference, id);
    await setDoc(docRef, model);
    this._models[id] = model;
  }

  public async delete(id: string): Promise<void> {
    const docRef = doc(this._collectionReference, id);
    await deleteDoc(docRef);
    delete this._models[id];
  }
}

export class FirebaseDataBaseProvider implements IDatabaseService {
  private readonly _db: Firestore;
  private readonly _contacts: IRepository<IContact, Contact>;
  private readonly _receipts: IRepository<IReceipt, Receipt>;

  constructor(userId: string) {
    this._db = getFirestore(firebaseApp);
    const useDoc = doc(this._db, 'users', userId);
    this._contacts = new FireBaseRepository(
      collection(useDoc, 'contacts').withConverter(
        createFirestoreDataConverter(Contact),
      ),
    );
    this._receipts = new FireBaseRepository(
      collection(useDoc, 'receipts').withConverter(
        createFirestoreDataConverter(Receipt),
      ),
    );
  }

  public get contacts() {
    return this._contacts;
  }

  public get receipts() {
    return this._receipts;
  }
}

function createFirestoreDataConverter<
  TDataModel extends IBaseModel,
  TAppModel extends BaseModel<TDataModel>,
>(cls: new (...args: any[]) => TAppModel): FirestoreDataConverter<TAppModel> {
  return {
    toFirestore(modelObject: TAppModel): TDataModel {
      return modelObject.model;
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions,
    ): TAppModel {
      const data = snapshot.data(options)!;
      return new cls(data);
    },
  };
}
