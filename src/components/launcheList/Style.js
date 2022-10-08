import { StyleSheet } from 'react-native'
import color from '../../constant/color';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.GHOST_WHITE,
        minHeight: 132,
        borderRadius: 20,
        padding: 18,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 14,
    },
    imageBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    imageBg: {
        backgroundColor: color.WHITE_COLOR,
        width: 100,
        height: 100,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listImage: {
        width: 50,
        height: 50
    },
    contentBox: {
        flex: 2,
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal"
    },
    date: {
        color: color.TEXT_COLOR,
        paddingTop: 5,
    },
    summary: {
        marginTop: 14,
        color: color.TEXT_COLOR
    }

});