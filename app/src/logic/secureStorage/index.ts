import React, { useState } from 'react';
import { useServices } from '@/logic/services';

export type secureStorageHook<TValue> = [
  [boolean, TValue | null],
  (value: TValue | null) => Promise<void>,
];

export const useSecureStorage = <TValue>(
  key: string,
): secureStorageHook<TValue> => {
  const { storage } = useServices();

  const [value, setValue] = useState<TValue | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    storage.getItemAsync(key).then((value) => {
      const parsedValue = value ? JSON.parse(value) : null;
      setValue(parsedValue);
      setIsLoading(false);
    });
  }, []);

  const saveValue = async (value: TValue | null) => {
    await storage.setItemAsync(key, JSON.stringify(value));
    setValue(value);
  };

  return [[isLoading, value], saveValue];
};
