import * as React from 'react';
import { Button, Dialog, Text } from '@rneui/themed';

type ConfirmActionProps = {
  isVisible: boolean;
  title: string;
  text: string;
  onConfirm: () => void;
  onDecline: () => void;
};

export default function ConfirmAction(props: ConfirmActionProps) {
  const { isVisible, title, text, onConfirm, onDecline } = props;

  return (
    <Dialog isVisible={isVisible}>
      <Dialog.Title title={title} />
      <Text>{text}</Text>
      <Dialog.Actions>
        <Button
          title="confirm"
          onPress={onConfirm}
          color="primary"
          type="outline"
        />

        <Button
          title="decline"
          onPress={onDecline}
          color="error"
          type="clear"
        />
      </Dialog.Actions>
    </Dialog>
  );
}
