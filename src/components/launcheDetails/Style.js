import { StyleSheet } from 'react-native'
import color from '../../constant/color';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.WHITE_COLOR,
        height: '100%',
    },
    wrapper: {
        marginLeft: '5%',
        marginRight: '5%'
    },
    imageBox: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 28,
    },
    imageBg: {
        backgroundColor: color.GHOST_WHITE,
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
    titleBox: {
        paddingLeft: 14,
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        color: color.TITLE_COLOR,
        fontSize: 14,
        fontWeight: '600'
    },
    subContent: {
        color: color.TEXT_COLOR,
        marginTop: 8,
    },
    contentBox: {
        marginTop: 48,
    },
    contentTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: color.TITLE_COLOR
    },
    contentText: {
        fontSize: 14,
        color: color.TEXT_COLOR,
        marginTop: 14,
    },
    youtubeBox: {
        marginTop: 24,
    },
    someDetailsContent: {
        flex: 1,
    },
    someDetailsText: {
        color: color.TEXT_COLOR,
        marginTop: 8
    },
    lastInfo: {
        marginTop: 24,
        marginBottom: 48
    },
    link: {
        color: color.APP_COLOR
    }
});
