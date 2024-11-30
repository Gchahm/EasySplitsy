import { ThemeProvider } from '@rneui/themed';
import * as React from 'react';
import {
  ThemeProvider as NavigationThemeProvider,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { ezTheme } from './EzTheme';
import { useColorScheme } from 'react-native';

type IEzThemeProviderProps = {
  children: React.ReactNode;
};

export const EzThemeProvider = (props: IEzThemeProviderProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = ezTheme(isDarkMode ? 'dark' : 'light');

  const CombinedLightTheme = {
    ...NavigationDefaultTheme,
    ...theme.lightColors,
  };
  const CombinedDarkTheme = { ...NavigationDarkTheme, ...theme.darkColors };

  const currentTheme = isDarkMode ? CombinedDarkTheme : CombinedLightTheme;

  return (
    <NavigationThemeProvider value={currentTheme}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </NavigationThemeProvider>
  );
};
