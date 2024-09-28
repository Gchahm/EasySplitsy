import { router } from 'expo-router';
import { Input } from '@rneui/base';
import { Button, Text } from '@rneui/themed';
import React from 'react';

export default function AddNewContactScreen() {
    const [name, setName] = React.useState('');

    return (
        <>
            <Text>Add New Contact</Text>
            <Input
                value={name}
                onChangeText={setName}
                placeholder="add participant"
                renderErrorMessage={false}
            />
            <Button
                onPress={() => router.navigate(`/contacts/${name}`)}
                title="Add"
            />
        </>
    );
}
