import { styled } from "@mui/material";
import Container from "@mui/material/Container";

export const MobileContainer = styled(Container, {
  name: "MuiSMobileContainer",
  slot: "root",
})<{ height?: string; padding?: number }>(({ height, padding }) => ({
  padding: padding || 0,
  margin: 0,
  boxSizing: "border-box",
  minHeight: height || "100%",
  height: height || "100%",
  maxHeight: height || "100%",
}));
