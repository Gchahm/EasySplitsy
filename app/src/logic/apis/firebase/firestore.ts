// Initialize Cloud Firestore and get a reference to the service
import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  Firestore,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from '@firebase/firestore';

import { firebaseApp } from '@/logic/apis/firebase/core';
import {
  IContact,
  IDatabaseService,
  IRepository,
} from '@/logic/apis/interfaces';

export class ContactsRepository implements IRepository<IContact> {
  //todo fix this type
  private readonly _collectionReference: CollectionReference;

  constructor(userCollection: DocumentReference) {
    this._collectionReference = collection(userCollection, 'contacts');
  }

  public async get(id: string): Promise<IContact | undefined> {
    const docRef = doc(this._collectionReference, id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as IContact | undefined;
  }

  public async getAll(): Promise<IContact[]> {
    const q = query(this._collectionReference);
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(results);
    return results as IContact[];
  }

  public async create(model: Omit<IContact, 'id'>): Promise<IContact> {
    const result = await setDoc(doc(this._collectionReference), model);
    return model as IContact;
  }

  public async update(id: string, model: IContact): Promise<IContact> {
    await setDoc(doc(this._collectionReference, id), model);
    return model;
  }

  public delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export class FirebaseDataBaseProvider implements IDatabaseService {
  private readonly _db: Firestore;
  private readonly _contacts: IRepository<IContact>;

  constructor(userId: string) {
    this._db = getFirestore(firebaseApp);
    const useDoc = doc(this._db, 'users', userId);
    this._contacts = new ContactsRepository(useDoc);
  }

  public get contacts() {
    return this._contacts;
  }
}
