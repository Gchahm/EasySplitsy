import { EzColors } from "@/constants/Colors";
import { ThemeMode, createTheme } from "@rneui/themed";

export const ezTheme = (mode: ThemeMode) =>
  createTheme({
    lightColors: EzColors.light,
    darkColors: EzColors.dark,
    mode,
    components: {
      Button: () => ({
        buttonStyle: {
          borderRadius: 5,
          padding: 10,
        },
        titleStyle: {
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
        },
      }),
    },
  });
