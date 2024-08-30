import ImagePicker from "@/components/ImagePicker";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";
import { Text } from "@rneui/themed";
import {
  createUploadFileApiBillsPost,
  getReceiptApiBillsGet,
} from "ez-split-clients";
import { IBillItem } from "ez-split-interfaces";
import { useBill } from "ez-split-logic";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const { setBill } = useBill();

  const handleSendClick = (value: string) => {
    const blob = new Blob([value], { type: "image/png" });
    const fileName = "example.png";
    const file = new File([blob], fileName, {
      type: "image/png",
      lastModified: new Date().getTime(),
    });

    createUploadFileApiBillsPost({
      baseUrl: "https://easysplit.azurewebsites.net",
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
