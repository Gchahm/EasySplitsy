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
        name="upload"
        options={{
          title: "Upload",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cloud-upload" : "cloud-upload-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="manageParticipants"
        options={{
          title: "Friends",
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
              name={focused ? "swap-vertical" : "swap-vertical-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
