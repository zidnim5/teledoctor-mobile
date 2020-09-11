import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SplashScreen = props => {
    return (
        <View style={style.screen}>
            <Text>this is SplashScreen Page</Text>            
        </View>
    );
};

const style = StyleSheet.create({
    screen: {
        flex = 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default SplashScreen;