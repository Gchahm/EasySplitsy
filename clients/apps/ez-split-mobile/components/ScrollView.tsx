
import * as React from 'react'
import { StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView'
import Animated, { useAnimatedRef } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 250,
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        padding: 32,
        gap: 16,
        overflow: 'hidden',
    },
});


export const ScrollView: React.FC<React.PropsWithChildren> = (props) => {

    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                {props.children}
            </Animated.ScrollView>
        </ThemedView>
    )
}


