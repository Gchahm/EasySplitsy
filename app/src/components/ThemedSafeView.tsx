import { type ViewProps } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedSafeAreaView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  return <SafeAreaView style={style} {...otherProps} />;
}
