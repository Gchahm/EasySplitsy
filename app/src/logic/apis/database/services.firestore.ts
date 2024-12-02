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
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  setDoc,
  SnapshotOptions,
  Unsubscribe,
} from '@firebase/firestore';

import { firebaseApp } from '@/logic/apis/firebase/core';
import { BaseModel, Contact, Receipt } from '@/logic/apis/database/models';
import {
  IDatabaseService,
  IRepository,
} from '@/logic/apis/database/service.types';
import { IBaseModel } from '@/logic/apis/database/models.types';

export class FireBaseRepository<
  TDataModel extends IBaseModel,
  TAppModel extends BaseModel<TDataModel>,
> implements IRepository<TAppModel>
{
  constructor(
    private readonly _collectionReference: CollectionReference<
      TAppModel,
      TDataModel
    >,
  ) {}

  public subscribe(callback: (models: TAppModel[]) => void): Unsubscribe {
    return onSnapshot(this._collectionReference, (doc) => {
      callback(doc.docs.map((doc) => doc.data()));
    });
  }

  public async get(id: string): Promise<TAppModel | undefined> {
    const docRef = doc(this._collectionReference, id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  public async getAll(): Promise<TAppModel[]> {
    const q = query(this._collectionReference);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => doc.data());
  }

  public async create(model: TAppModel): Promise<void> {
    const docRef = doc(this._collectionReference);
    await setDoc(docRef, model);
  }

  public async update(id: string, model: TAppModel): Promise<void> {
    const docRef = doc(this._collectionReference, id);
    await setDoc(docRef, model);
  }

  public async delete(id: string): Promise<void> {
    const docRef = doc(this._collectionReference, id);
    await deleteDoc(docRef);
  }
}

export class FirebaseDataBaseProvider implements IDatabaseService {
  private readonly _db: Firestore;
  private readonly _contacts: IRepository<Contact>;
  private readonly _receipts: IRepository<Receipt>;

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
      return new cls(data, snapshot.id);
    },
  };
}
