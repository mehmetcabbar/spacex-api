import { StyleSheet } from 'react-native';
import color from '../../constant/color';


export const styles = StyleSheet.create({
    button: {
        with: '100%',
        height: 58,
        backgroundColor: color.APP_COLOR,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    text: {
        color: color.WHITE_COLOR,
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",

    }
});
