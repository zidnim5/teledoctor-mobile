import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DashboardScreen = props => {
    return (
        <View style={style.screen}>
            <Text>This is Dashboard Page</Text>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center'
    },
});

export default DashboardScreen;