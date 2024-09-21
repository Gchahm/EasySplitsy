import ImagePicker from '@/components/ImagePicker';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { Text } from '@rneui/base';

export default function UploadScreen() {
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
    () => formData;
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
