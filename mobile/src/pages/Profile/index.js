import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

function Profile() {
    const navigation = useNavigation();
    const route = useRoute();
    const github_username = route.params.github_username;

    return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${github_username}` }}/>
}

export default Profile;