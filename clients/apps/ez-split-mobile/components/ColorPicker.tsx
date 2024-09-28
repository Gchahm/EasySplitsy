import { FAB } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

export type ColorPickerProps = {
  colors: string[];
  onColorChange: (color: string) => void;
};

export default function ColorPicker(props: ColorPickerProps) {
  return (
    <View style={styles.container}>
      {props.colors.map((color, index) => (
        <FAB key={index} color={color}></FAB>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    width: 32,
    height: 32,
    borderRadius: 16,
    margin: 8,
  },
});
