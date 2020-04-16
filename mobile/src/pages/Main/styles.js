import { StyleSheet } from 'react-native';
import { Constants } from 'expo-constants';

export default StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 55,
        height: 55,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    },
});