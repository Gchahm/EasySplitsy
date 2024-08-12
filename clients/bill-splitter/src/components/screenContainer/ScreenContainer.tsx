import * as React from "react";
import { IScreenContainerProps } from ".";
import { Container } from "@mui/material";

export const ScreenContainer: React.FC<IScreenContainerProps> = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};
