import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions,StatusBar, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';


const SplashScreen = props => {

    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.navigate('Welcome');
            console.log('oke')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <View style={style.screen}>
            <StatusBar barStyle="light-content" />
            <View style={style.header}>
                <Animatable.Image 
                animation="bounceIn" duration={1000}
                style={{width: '50%', height: 100,resizeMode : 'stretch' }}
                source={{uri:"https://image.freepik.com/free-vector/d-logo-business-company_125964-110.jpg"}} />
                <Animatable.Text animation="" duration={3000} delay={1000} style={{marginTop: 10, fontSize: 18, fontWeight: 'normal', color: Colors.textColor}}>APPLICATION</Animatable.Text>
            </View>
            <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 12,color: Colors.textColor }}>PT. KAILA INDONESIA BERDAYA</Text>
            </View>
        </View>
    );
};

const height = Dimensions.get("screen");
const height_logo = height *  0.7 * 0.4;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    imageLogo: {
        height: height_logo,
        width: height_logo,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100
    },
    headerText: {
        fontSize: 40,
        color: Colors.textColor,
        fontWeight: 'bold'
    },
    footer: {
        flex: 1,
        backgroundColor: '#ffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25
    },
});

export default SplashScreen;