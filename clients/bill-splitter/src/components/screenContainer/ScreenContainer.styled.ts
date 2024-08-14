import { Stack, styled } from "@mui/material";

export const ScreenContainerRoot = styled(Stack, {
  name: "MuiSScreenContainer",
  slot: "root",
})({
  padding: 0,
  height: "100%",
  maxHeight: "100%",
  width: "100%",
});

export const ScreenContainerHeader = styled(Stack, {
  name: "MuiSScreenContainerHeader",
  slot: "header",
})({
  padding: 0,
});

export const ScreenContainerContent = styled(Stack, {
  name: "MuiSScreenContainerContent",
  slot: "content",
})({
  padding: 0,
  flexGrow: 1,
  overflow: "scroll",
});

export const ScreenContainerFooter = styled(Stack, {
  name: "MuiSScreenContainerFooter",
  slot: "footer",
})({
  padding: 0,
});
