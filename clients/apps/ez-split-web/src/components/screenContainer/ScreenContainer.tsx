import * as React from "react";
import { IScreenContainerProps } from ".";
import {
  ScreenContainerContent,
  ScreenContainerFooter,
  ScreenContainerHeader,
  ScreenContainerRoot,
} from "./ScreenContainer.styled";

export const ScreenContainer: React.FC<IScreenContainerProps> = (props) => {
  const { header, children, footer, height } = props;

  return (
    <ScreenContainerRoot height={height} maxHeight={height}>
      {header && <ScreenContainerHeader>{header}</ScreenContainerHeader>}
      {children && <ScreenContainerContent>{children}</ScreenContainerContent>}
      {footer && <ScreenContainerFooter>{footer}</ScreenContainerFooter>}
    </ScreenContainerRoot>
  );
};
