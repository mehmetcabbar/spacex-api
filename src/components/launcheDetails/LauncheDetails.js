import React from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    Linking,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import moment from 'moment';



function LauncheDetails({ images, title, date, number, details }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.imageBox}>
                    <View style={styles.imageBg}>
                        <Image
                            source={images}
                            style={styles.listImage}
                        />
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subContent}>Date: {moment(date).format('MMMM Do YYYY')} </Text>
                        <Text style={styles.subContent}>Flight Number: {number} </Text>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentTitle}>Launche description</Text>
                    <Text style={styles.contentText}>
                        {details}
                    </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentTitle}>More details</Text>
                    <Text style={styles.contentText}>
                        If you want to see more information about this launch, please check link at below!
                    </Text>
                    <TouchableOpacity
                        style={styles.lastInfo}
                        onPress={() => Linking.openURL('https://www.spacex.com/')}>
                        <Text
                            style={styles.link}>
                            Visit SpaceX website
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default LauncheDetails