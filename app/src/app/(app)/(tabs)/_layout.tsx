import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTheme } from '@rneui/themed';

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme?.colors.grey2,
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Upload',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'cloud-upload' : 'cloud-upload-outline'}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
