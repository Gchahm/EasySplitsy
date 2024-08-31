import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useTheme } from "@rneui/themed";
import { useBill } from "ez-split-logic";

export default function TabLayout() {
  const { theme } = useTheme();
  const { participants } = useBill();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.grey2,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="manageParticipants"
        options={{
          title: "Participants",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="splitter"
        options={{
          title: "Split",
          href: participants.length < 2 ? null : undefined,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
