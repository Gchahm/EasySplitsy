import ImagePicker from '@/components/ImagePicker';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { router } from 'expo-router';
import { uploadApiV1ReceiptsUploadPost } from 'ez-split-clients';
import { IReceiptItem } from 'ez-split-interfaces';
import { useSplit } from 'ez-split-logic';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { Text } from '@rneui/base';

export default function UploadScreen() {
  const { setBill } = useSplit();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  const handleSendClick = async (uri: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(uri);
      const blob = await response.blob();
      const fileName = uri.split('/').pop() || '';
      const fileType = blob.type;
      const file = new File([blob], fileName, { type: fileType });
      await handleServerCall(file);
      router.navigate('/(tabs)/manageParticipants');
      setIsLoading(false);
    } catch (errror) {
      setErrorMessage('Failed to upload receipt');
      setIsLoading(false);
    }
  };

  const handleServerCall = async (file: File) => {
    try {
      const response = await uploadApiV1ReceiptsUploadPost({
        baseUrl: process.env.EXPO_PUBLIC_API_URL,
        body: { file },
      });
      const items: IReceiptItem[] =
        response.data?.items.map((item, id) => {
          return {
            id: id.toString(),
            ...item,
          };
        }) || [];
      setBill(items);
    } catch (error) {
      console.log(error);
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
