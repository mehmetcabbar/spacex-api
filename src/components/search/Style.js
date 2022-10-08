import { StyleSheet } from 'react-native'
import color from '../../constant/color';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.WHITE_COLOR,
        marginTop: '35%',
        marginLeft: '5%',
        marginRight: '5%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 18
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: color.TITLE_COLOR
    },
    buttonBox: {
        marginTop: 14
    }
});