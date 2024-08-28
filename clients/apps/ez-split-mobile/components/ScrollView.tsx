import * as React from "react";
import Animated, { useAnimatedRef } from "react-native-reanimated";

export const ScrollView: React.FC<React.PropsWithChildren> = (props) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      {props.children}
    </Animated.ScrollView>
  );
};
