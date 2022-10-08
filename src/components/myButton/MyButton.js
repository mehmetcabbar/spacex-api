import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Style'

function MyButton({ title, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton