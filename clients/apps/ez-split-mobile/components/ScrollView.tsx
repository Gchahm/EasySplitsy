import * as React from "react";
import { ViewProps } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

type ScrollViewProps = ViewProps;

export const ScrollView = (props: ScrollViewProps) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} {...props}>
      {props.children}
    </Animated.ScrollView>
  );
};
