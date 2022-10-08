import React from 'react';
import { View, Text } from 'react-native'
import { styles } from './Style'
import MyInput from '../myInput/MyInput';

function Search({ onPress, title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Check SpaceX Launches
            </Text>
            <MyInput onPress={onPress} title={title} />
        </View>
    )
}

export default Search