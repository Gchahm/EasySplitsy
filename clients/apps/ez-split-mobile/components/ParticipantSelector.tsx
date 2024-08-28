import { Input, Text } from "@rneui/base";
import * as React from "react";

export interface IParticipantSelectorProps {
  onAddClick: (value: string) => void;
}

export const ParticipantSelector: React.FC<IParticipantSelectorProps> = (
  props,
) => {
  const { onAddClick } = props;

  const [final, setFinal] = React.useState("");

  return (
    <>
      <Text>{final}</Text>
    </>
  );
};
