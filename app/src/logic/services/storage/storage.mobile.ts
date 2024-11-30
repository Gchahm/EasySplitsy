import { IStorage } from '@/logic/services/storage/storage.type';
import * as SecureStore from 'expo-secure-store';

class StorageMobile implements IStorage {
  public setItemAsync(key: string, value: string) {
    return SecureStore.setItemAsync(key, value);
  }

  public getItemAsync(key: string) {
    return SecureStore.getItemAsync(key);
  }
}
