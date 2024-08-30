import { Colors } from "@/constants/Colors";
import { ThemeMode, createTheme } from "@rneui/themed";

export const ezTheme = (mode: ThemeMode) =>
  createTheme({
    lightColors: Colors.light,
    darkColors: Colors.dark,
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
        inputContainerStyle: {
          borderRadius: 5,
          padding: 10,
          backgroundColor: theme.colors.white,
          borderWidth: 1,
        },
        labelStyle: {
          color: "#BB86FC",
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
