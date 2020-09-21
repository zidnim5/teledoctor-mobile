import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions,StatusBar, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

import {Entypo} from '@expo/vector-icons';
import { Camera } from 'expo-camera';


const VideoCall = props => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        ( async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={style.screen}>
            <View style={style.video_room}>
                <View style={{height: 120, width: 100, borderWidth: 1, position: "absolute",zIndex:1, marginTop: 50, right: 0, marginRight: 20, backgroundColor: '#aaaa'}}>

                </View>
                <Camera style={{ flex: 1 }} type={type}>
                    <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                        flex: 0.1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        }}
                        onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                    </View>
                </Camera>
            </View>
            <View style={style.control_room}>
                <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: 'center'}}>
                    <TouchableOpacity onPress={ () => props.navigation.navigate('DoctorList')} style={{backgroundColor: 'red', borderRadius: 50, alignItems: 'center', padding: 15,}}>
                        <Entypo name="controller-stop" style={{fontSize:24, color: '#ffff'}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const height = Dimensions.get("screen");
const height_logo = height *  0.7 * 0.4;

const style = StyleSheet.create({
    screen: {
        flex: 1,
    },
    video_room: {
        flex: 6,
        backgroundColor: '#dddd',
    },
    control_room: {
        flex: 1,
        justifyContent: "flex-end",
    }
});

export default VideoCall;