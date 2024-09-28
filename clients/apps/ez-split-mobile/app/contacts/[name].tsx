import ColorPicker from '@/components/ColorPicker';
import { Button, Text } from '@rneui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import { contactsActions, useAppDispatch } from 'ez-split-logic';

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'pink',
  'black',
  'white',
  'gray',
  'brown',
  'cyan',
  'magenta',
  'lime',
  'teal',
  'indigo',
  'maroon',
  'navy',
  'olive',
  'silver',
  'aqua',
  'fuchsia',
  'limegreen',
  'skyblue',
  'violet',
  'coral',
  'gold',
  'khaki',
  'plum',
  'salmon',
  'tan',
  'tomato',
  'wheat',
  'azure',
  'beige',
  'crimson',
  'mint',
  'peach',
  'rose',
  'snow',
  'tan',
  'thistle',
  'turquoise',
  'yellowgreen',
];

export default function CreateContactScreen() {
  const { name } = useLocalSearchParams();
  const dispatch = useAppDispatch();

  const addContact = () => {
    if (!Array.isArray(name)) {
      dispatch(contactsActions.addContact({ person: { name } }));
      router.navigate('/');
    }
  };

  return (
    <>
      <Text>{name}</Text>
      <ColorPicker
        colors={colors}
        onColorChange={(color) => console.log(color)}
      />
      <Button title="Save" onPress={addContact} />
    </>
  );
}
