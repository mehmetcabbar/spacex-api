import { StyleSheet, Platform } from "react-native";
import color from '../../constant/color';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.WHITE_COLOR,
        display: 'flex',
        flex: 1
    },
    imageBox: {
        flex: 1
    },
    headerImage: {
        width: 400,
        height: 240,
        resizeMode: 'contain',
    },
    bottomImage: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
    },
    flatlistBox: {
        flex: 1,
        marginLeft: '5%',
        marginRight: '5%'
    },
    flatlistBottom: {
        marginBottom: 24
    },
    buttonBox: {
        marginLeft: '9%',
        marginRight: '9%',
    },
    modalBox: {
        height: '40%',
        backgroundColor: color.GHOST_WHITE,
        padding: '5%'
    },
    calendar: {
        backgroundColor: color.WHITE_COLOR,
        padding: 18,
    },
    closeModal: {
        position: 'absolute',
        top: Platform.OS === 'android' ? 28 : 44,
        right: 24
    },
    closeTextStyle: {
        fontSize: 14,
        fontWeight: '600',
        padding: 6,
        color: color.TEXT_COLOR
    },
    mapOutsite: {
        backgroundColor: color.GHOST_WHITE,
        marginTop: Platform.OS === 'android' ? '7%' : '12%',
        borderRadius: 20,
        height: '40%',
    },
    mapBox: {
        paddingLeft: 14,
        paddingTop: 14
    },
    mapText: {
        color: color.TEXT_COLOR
    }

});
