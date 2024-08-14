import * as React from "react";
import { IScreenContainerProps } from ".";
import {
  ScreenContainerContent,
  ScreenContainerFooter,
  ScreenContainerHeader,
  ScreenContainerRoot,
} from "./ScreenContainer.styled";

export const ScreenContainer: React.FC<IScreenContainerProps> = (props) => {
  const { header, children, footer } = props;

  return (
    <ScreenContainerRoot>
      <ScreenContainerHeader>{header}</ScreenContainerHeader>
      <ScreenContainerContent>{children}</ScreenContainerContent>
      <ScreenContainerFooter>{footer}</ScreenContainerFooter>
    </ScreenContainerRoot>
  );
};
