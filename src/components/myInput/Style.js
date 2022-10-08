import { StyleSheet } from 'react-native'
import color from '../../constant/color';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.GHOST_WHITE,
        height: 60,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 18,
        marginTop: 18
    },
    placeholder: {
        color: color.TEXT_COLOR
    }

});