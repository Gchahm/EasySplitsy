import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { BillProvider } from "ez-split-logic";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemeProvider as TP2 } from "@react-navigation/native";
import { ThemeProvider, createTheme, darkColors } from "@rneui/themed";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const theme = createTheme({
    lightColors: DefaultTheme.colors,
    darkColors: DarkTheme.colors,
    mode: "dark",
    components: {
      Card: {
        containerStyle: {
          borderRadius: 24,
          borderWidth: 0,
          margin: 20,
        },
      },
      ListItem: {
        containerStyle: {
          backgroundColor: darkColors.background,
        },
      },
    },
  });

  return (
    <TP2 value={DarkTheme}>
      <ThemeProvider theme={theme}>
        <BillProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </BillProvider>
      </ThemeProvider>
    </TP2>
  );
}
