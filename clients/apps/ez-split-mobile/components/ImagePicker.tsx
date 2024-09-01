import { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import * as ExpoImageHelpers from "expo-image-picker";
import { Button } from "@rneui/themed";

export type ImagePickerProps = {
  onSendClick: (image: string) => void;
};

export default function ImagePicker(props: ImagePickerProps) {
  const { onSendClick } = props;
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ExpoImageHelpers.launchImageLibraryAsync({
      mediaTypes: ExpoImageHelpers.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <View style={styles.footer}>
        <Button
          style={styles.button}
          type="outline"
          title="Select Image"
          onPress={pickImage}
        />
        <Button
          style={styles.button}
          disabled={!image}
          title="Send"
          onPress={() => image && onSendClick(image)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    margin: 10,
    alignContent: "stretch",
    alignItems: "stretch",
  },
  button: {
    margin: 12,
  },
  image: {},
});
