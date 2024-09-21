import ImagePicker from '@/components/ImagePicker';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { router } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import * as React from 'react';
import { Text } from '@rneui/base';
import {
  splitSelectors,
  splitThunk,
  useAppDispatch,
  useAppSelector,
} from 'ez-split-logic';

export default function UploadScreen() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(splitSelectors.selectIsUploadingReceipt);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  const handleSendClick = async (uri: string) => {
    try {
      await handleServerCall(uri);
    } catch (errror) {
      setErrorMessage('Failed to upload receipt');
    }
  };

  const fetchImageFromUri = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  const handleServerCall = async (uri: string) => {
    const baseUrl: string = process.env.EXPO_PUBLIC_API_URL!;
    const blob = await fetchImageFromUri(uri);
    const fileName = uri.split('/').pop() || '';
    const fileType: string = blob.type;
    const file =
      Platform.OS === 'web'
        ? new File([blob], fileName, { type: fileType })
        : ({
            uri,
            type: fileType,
            name: fileName,
          } as unknown as File);
    dispatch(
      splitThunk.uploadReceipt({
        baseUrl,
        file,
        bodySerializer: () => {
          const formData = new FormData();
          formData.append('file', file);
          return formData;
        },
      }),
    );
  };

  return (
    <ThemedSafeAreaView style={styles.page}>
      {errorMessage && <Text>{errorMessage}</Text>}
      <ImagePicker isLoading={!!isLoading} onSendClick={handleSendClick} />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    verticalAlign: 'middle',
  },
});
