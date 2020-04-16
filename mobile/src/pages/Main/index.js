import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from "expo-location";

import styles from './styles';

export default function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);

    const navigation = useNavigation();

    const github_username= 'zAndreyG';

    function navigateToProfile() {
        navigation.navigate('Profile');
    }
    
    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                })
            }
        }

        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -20.752500, longitude: -49.3933327 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/49600701?s=400&u=2d0867f70de1ce40d7defb1647fd192c0ca29bc2&v=4' }} />

                <Callout onPress={() => navigateToProfile()}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Andrey Gonçalves</Text>
                        <Text style={styles.devBio}>Estou Triste</Text>
                        <Text style={styles.devTechs}>Python, ReactJs, React Native, NodeJS</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );
}

/* Start in: 1:04:40h --> yarn start */