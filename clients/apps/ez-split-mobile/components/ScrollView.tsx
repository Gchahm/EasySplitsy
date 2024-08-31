import * as React from "react";
import { StyleSheet, ViewProps } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

type ScrollViewProps = ViewProps;

export const ScrollView = (props: ScrollViewProps) => {
  const { style } = props;
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      ref={scrollRef}
      scrollEventThrottle={16}
      style={[styles.container, style]}
      {...props}
    >
      {props.children}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
