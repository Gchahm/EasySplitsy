import ImagePicker from '@/components/ImagePicker';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { Platform, StyleSheet } from 'react-native';
import * as React from 'react';
import { Text } from '@rneui/base';
import {
  splitSelectors,
  splitThunk,
  useAppDispatch,
  useAppSelector
} from '@/logic';
import { EnvironmentVariables } from '@/logic/utils/EnvironmentVariables';

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

  const handleServerCall = async (uri: string) => {
    dispatch(
      splitThunk.uploadReceipt(uri)
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
    verticalAlign: 'middle'
  }
});
