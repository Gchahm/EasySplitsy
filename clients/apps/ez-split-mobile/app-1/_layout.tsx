import { Stack, Tabs } from "expo-router";
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
export default function RootLayout() {
    return (
        <Stack>
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="splitter"
                    options={{
                        title: 'Split',
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </Stack>
    );
}
