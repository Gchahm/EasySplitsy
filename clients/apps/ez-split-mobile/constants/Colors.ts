/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { ThemeProvider, createTheme, lightColors } from "@rneui/themed";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    primary: "#6200EE", // A shade of purple, often used for buttons or highlights
    secondary: "#03DAC6", // A teal color, used for secondary buttons or accents
    background: "#FFFFFF", // White background
    card: "#F8F8F8", // Light gray for cards or surfaces
    text: "#000000", // Black text color
    border: "#E0E0E0", // Light gray border color
    notification: "#FF0266", // A shade of pink for notifications
    success: "#4CAF50", // Green for success messages
    warning: "#FB8C00", // Orange for warnings
    error: "#F44336", // Red for errors
    info: "#2196F3", // Blue for informational messages

    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: "#BB86FC", // A lighter purple, still vibrant but suitable for dark backgrounds
    secondary: "#03DAC6", // Teal, works well on dark surfaces too
    white: "#161618",
    background: "#000000",
    card: "#1E1E1E", // Slightly lighter gray for cards or surfaces
    text: "#FFFFFF", // White text color
    border: "#272727", // Dark gray for borders
    notification: "#FF80AB", // Light pink for notifications
    success: "#66BB6A", // Light green for success messages
    warning: "#FFA726", // Light orange for warnings
    error: "#E57373", // Light red for errors
    info: "#64B5F6", // Light blue for informational messages

    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
