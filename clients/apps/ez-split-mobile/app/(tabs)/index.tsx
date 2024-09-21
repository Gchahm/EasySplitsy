import ImagePicker from '@/components/ImagePicker';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { router } from 'expo-router';
import { uploadApiV1ReceiptsUploadPost } from 'ez-split-clients';
import { IReceiptItem } from 'ez-split-interfaces';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { Text } from '@rneui/base';
import { splitActions, useAppDispatch } from 'ez-split-logic';

export default function UploadScreen() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  const handleSendClick = async (uri: string) => {
    try {
      setIsLoading(true);
      await handleServerCall(uri);
      router.navigate('/(tabs)/manageParticipants');
      setIsLoading(false);
    } catch (errror) {
      setErrorMessage('Failed to upload receipt');
      setIsLoading(false);
    }
  };

  const handleServerCall = async (uri: string) => {
    const baseUrl: string | undefined = process.env.EXPO_PUBLIC_API_URL;
    const file = {
      uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    } as unknown as Blob;
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await uploadApiV1ReceiptsUploadPost({
        baseUrl,
        bodySerializer: () => formData,
        body: { file },
      });
      const receipt: IReceiptItem[] =
        response.data?.items.map((item, id) => {
          return {
            id: id.toString(),
            ...item,
          };
        }) || [];
      dispatch(splitActions.setReceipt({ receipt }));
    } catch (error) {
      console.log(error);
      throw new Error('Failed to upload receipt');
    }
  };

  return (
    <ThemedSafeAreaView style={styles.page}>
      {errorMessage && <Text>{errorMessage}</Text>}
      <ImagePicker isLoading={isLoading} onSendClick={handleSendClick} />
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
