import React, { useEffect, useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { MaterialIcons }  from '@expo/vector-icons';

import api from '../../services/api';
import styles from './styles';

export default function Main() {
    const [devs, setDevs] = useState([]);
    const [currentRegion, setCurrentRegion] = useState(null);
    const [techs, setTechs] = useState([]);

    const navigation = useNavigation();

    // let github_username= '';

    function navigateToProfile() {
        navigation.navigate('Profile', { github_username: dev.github_username });
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

    async function loadDevs() {
        const { latitude, longitude } = currentRegion;

        const response = await api.get('/search', {
            params: {
                latitude,
                longitude,
                techs
            }
        });

        setDevs(response.data.devs);
    }

    function handleRegionChanged(region) {
        setCurrentRegion(region);
    }

    if (!currentRegion) {
        return null;
    }

    return (
        <>
            <MapView onRegionChangeComplete={handleRegionChanged}
              initialRegion={currentRegion}
              style={styles.map}
            >
                {devs.map(dev => (
                    <Marker key={dev._id} coordinate={{ longitude: dev.location.coordinates[0], latitude: dev.location.coordinates[1] }}>
                        <Image style={styles.avatar} source={{ uri: dev.avatar_url }} />

                        <Callout onPress={() => navigateToProfile(github_username)}>
                            <View style={styles.callout}>
                                <Text style={styles.devName}>{dev.name}</Text>
                                <Text style={styles.devBio}>{dev.bio}</Text>
                                <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <View style={styles.searchForm}>
                <TextInput 
                  style={styles.searchInput}
                  placeholder='Buscar devs por techs...'
                  placeholderTextColor='#999'
                  autoCapitalize='words'
                  autoCorrect={false}
                  value={techs}
                  onChangeText={setTechs}
                />
                
                <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
                    <MaterialIcons name='my-location' size={20} color='#FFF' />
                </TouchableOpacity>
            </View>
        </>
    );
}

/* Problem: 1:32h --> yarn start */