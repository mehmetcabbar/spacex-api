import React, { useState, useEffect, useCallback } from 'react';
import { View, ImageBackground, FlatList, Text, Modal, Pressable, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { styles } from './Styles'
import { useFocusEffect } from '@react-navigation/native';

// Our npm packages are here
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// Our components are here
import Search from '../../components/search/Search';
import LauncheList from '../../components/launcheList/LauncheList';
import MyButton from '../../components/myButton/MyButton';


function Home({ navigation, route }) {
    const launches = useSelector(state => {
        return state.launches
    })
    const dispatch = useDispatch()
    const [showBottom, setShowBottom] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [inputTitle, setInputTitle] = useState('Select a date')
    const [selectedId, setSelectedId] = useState(null);


    const getLaunches = () => {
        dispatch({ type: "ADD_LAUNCHE_REQUEST" })
        axios.get('https://api.spacexdata.com/latest/launches/')
            .then(response =>
                dispatch({ type: 'ADD_LAUNCHE_SUCCESS', payload: response.data })
            )
            .catch(error =>
                dispatch({ type: 'ADD_LAUNCHE_ERROR', payload: error })
            )
    };

    useEffect(() => {
        getLaunches()
    }, [])


    useFocusEffect(
        useCallback(() => {
            getLaunches()
        }, [])
    );


    const inputAction = () => {
        setShowBottom(true)
        setShowModal(true)
    }

    const changeState = (id) => {
        let newState = launches.filter(item => item.id === id)
        dispatch({ type: 'ADD_LAUNCHE_SUCCESS', payload: newState })
    }

    const setupResult = (e, id, date_utc) => {
        setShowModal(false)
        setInputTitle(moment(date_utc).format('MMMM Do YYYY'))
        changeState(id)
    }

    const showAlert = () => {
        Alert.alert('Just button', 'All functions working without button action but, I wanted to use that just for the good image ')
    }


    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <ImageBackground
                    source={require('../../images/launche.png')}
                    style={styles.headerImage}>
                    <Search title={inputTitle} onPress={inputAction} />
                    <View style={styles.buttonBox}>
                        <MyButton title={'Search'} onPress={showAlert} />
                    </View>
                </ImageBackground>
            </View>
            {showBottom ?
                <View style={styles.flatlistBox}>
                    <FlatList
                        data={launches}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                        renderItem={({ item }) => (
                            <LauncheList
                                image={item.links.patch.small}
                                name={item.name}
                                date={item.date_utc}
                                number={item.flight_number}
                                onPress={() => navigation.navigate('Details', { id: item.id })}
                            />
                        )}
                        ListFooterComponent={() => <View style={styles.flatlistBottom}></View>}
                    />
                </View>
                :
                <ImageBackground source={require('../../images/lookUp.png')}
                    style={styles.bottomImage}>
                </ImageBackground>
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    setShowModal(false);
                }}
            >
                <View style={styles.modalBox}>
                    <ScrollView style={styles.mapOutsite}>
                        {
                            launches.map(item =>
                                <TouchableOpacity
                                    onPress={(e) => setupResult(e, item.id, item.date_utc)}
                                    style={styles.mapBox} key={item.id}>
                                    <Text style={styles.mapText}>
                                        {moment(item.date_utc).format('MMMM Do YYYY')}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </ScrollView>
                    <Pressable
                        onPress={() => setShowModal(false)}
                        style={styles.closeModal}
                    >
                        <Text style={styles.closeTextStyle}>Close</Text>
                    </Pressable>
                </View>

            </Modal>
        </View>
    )
}

export default Home