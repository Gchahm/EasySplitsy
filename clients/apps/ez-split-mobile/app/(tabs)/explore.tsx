import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useEffect } from 'react';
import { useBill } from 'ez-split-logic';
import { BillItem } from '@/components/BillItem';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from '@/components/ScrollView';

export default function TabTwoScreen() {
    const { bill, selectedParticipant, items } = useBill();

    const handleSwipeEnd = () => {
        console.log('swipe end');
    }
    return (
        <ScrollView>
            <ThemedView>
                {items.filter(item => selectedParticipant?.items[item.id]).map((item, key) => (
                    <BillItem onSwipeEnd={handleSwipeEnd} {...item} key={key} quantity={bill[item.id]} />
                ))}
            </ThemedView>

            <ThemedView>
                {items.filter(item => bill[item.id]).map((item, key) => (
                    <BillItem onSwipeEnd={handleSwipeEnd} {...item} key={key} quantity={bill[item.id]} />
                ))}
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
