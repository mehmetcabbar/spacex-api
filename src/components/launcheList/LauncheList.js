import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { styles } from './Style'
import moment from 'moment'

function LauncheList({ name, date, number, onPress, image }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imageBox}>
                <View style={styles.imageBg}>
                    <Image
                        source={{ uri: image }}
                        style={styles.listImage} />
                </View>
            </View>
            <View style={styles.contentBox}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.date}>{moment(date).format('MMMM Do YYYY')}</Text>
                    <Text style={styles.date}>Flight No: {number}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default LauncheList