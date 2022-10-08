import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './Style'




function MyInput({ onPress, title }) {
    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.placeholder}>{title}</Text>
        </TouchableOpacity>
    )
}


export default MyInput