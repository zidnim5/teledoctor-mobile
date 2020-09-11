import React from 'react';
import { Text, View } from 'react-native';

const VideoCallScreen = props => {
    return (
        <View style={style.screen}>
            <Text>This is Video Call Page!</Text>
        </View>
    );
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
});

export default VideoCallScreen;