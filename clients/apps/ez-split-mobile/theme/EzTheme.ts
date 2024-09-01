import { lightColors, darkColors } from "@/constants/Colors";
import { MARGIN_HORIZONTAL } from "@/constants/Padding";
import { ButtonProps, Colors, ThemeMode, createTheme } from "@rneui/themed";

export const ezTheme = (mode: ThemeMode) =>
  createTheme({
    lightColors: lightColors,
    darkColors: darkColors,
    spacing: {
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
    },
    mode,
    components: {
      Button: (props, theme) => ({
        buttonStyle: {
          borderColor: buttonColor(props, theme.colors),
          borderRadius: 5,
          padding: 10,
        },
        titleStyle: {
          color: buttonColor(props, theme.colors),
          fontSize: 16,
          fontWeight: "bold",
        },
      }),
      Text: {
        style: {
          fontSize: 16,
        },
        h1Style: {
          fontSize: 30,
          fontWeight: "bold",
        },
        h2Style: {
          fontSize: 24,
          fontWeight: "600",
        },
      },
      Input: (_, theme) => ({
        containerStyle: {
          margin: 0,
          padding: 0,
        },
        inputContainerStyle: {
          borderRadius: 32,
          backgroundColor: theme.colors.searchBg,
          borderWidth: 0,
          colors: theme.colors.black,
        },
        inputStyle: {
          padding: 10,
        },
        labelStyle: {
          color: theme.colors.black,
        },
      }),
      ListItemSwipeable: (_, theme) => ({
        containerStyle: {
          backgroundColor: theme.colors.white,
        },
      }),
      ListItem: (_, theme) => ({
        containerStyle: {
          backgroundColor: theme.colors.white,
        },
      }),
      Card: (_, theme) => ({
        containerStyle: {
          borderWidth: 0,
          backgroundColor: theme.colors.white,
          borderRadius: 12,
          margin: MARGIN_HORIZONTAL,
        },
      }),
      Dialog: (_, theme) => ({
        overlayStyle: {
          borderRadius: 12,
          backgroundColor: theme.colors.white,
        },
      }),
      DialogTitle: (_, theme) => ({
        titleStyle: {
          color: theme.colors.black,
        },
      }),
    },
  });

function buttonColor(props: ButtonProps, colors: Colors): string {
  switch (props.type) {
    case "solid":
      return colors.black;
    default:
      return outlineColor(props, colors);
  }
}

function outlineColor(props: ButtonProps, colors: Colors): string {
  switch (props.color) {
    case "success":
      return colors.success;
    case "error":
      return colors.error;
    case "warning":
      return colors.warning;
    case "secondary":
      return colors.secondary;
    default:
      return colors.primary;
  }
}
