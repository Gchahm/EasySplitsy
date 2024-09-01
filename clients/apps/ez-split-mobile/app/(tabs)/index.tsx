import ImagePicker from "@/components/ImagePicker";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";
import { createUploadFileApiBillsPost } from "ez-split-clients";
import { IBillItem } from "ez-split-interfaces";
import { useBill } from "ez-split-logic";
import { StyleSheet } from "react-native";

export default function UploadScreen() {
  const { setBill } = useBill();

  const handleSendClick = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const fileName = uri.split("/").pop() || "";
    const fileType = blob.type;
    const file = new File([blob], fileName, { type: fileType });

    createUploadFileApiBillsPost({
      baseUrl: process.env.EXPO_PUBLIC_API_URL,
      body: { file },
    })
      .then((response) => {
        const items: IBillItem[] =
          response.data?.items.map((item, id) => {
            return {
              id: id.toString(),
              ...item,
            };
          }) || [];
        setBill(items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ThemedSafeAreaView style={styles.page}>
      <ImagePicker onSendClick={handleSendClick} />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    verticalAlign: "middle",
  },
});
