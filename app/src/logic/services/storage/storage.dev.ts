import { IStorage } from '@/logic/services/storage/storage.type';
import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-async-storage/async-storage';

export class StorageDev implements IStorage {
  private storage: AsyncStorageStatic;

  constructor() {
    this.storage = AsyncStorage;
  }

  async setItemAsync(key: string, value: string) {
    await this.storage.setItem(key, value);
  }

  async getItemAsync(key: string) {
    return await this.storage.getItem(key);
  }
}
