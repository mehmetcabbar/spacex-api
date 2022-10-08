import React from 'react';
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import LauncheDetails from '../../components/launcheDetails/LauncheDetails';

function Details({ route, navigation }) {
    const { id } = route.params
    const launches = useSelector(state => {
        return state.launches
    })


    return (
        <View>
            {launches.length ?
                launches.filter((item) => item.id === id).map(item =>
                    <LauncheDetails
                        key={item.id}
                        images={{ uri: item.links.patch.small }}
                        title={item.name}
                        date={item.date_utc}
                        number={item.flight_number}
                        details={item.details}
                        videoId={item.links.youtube_id}
                    />
                )
                :
                <View>
                    <Text>Something went wrong!</Text>
                </View>
            }

        </View>
    )
}

export default Details