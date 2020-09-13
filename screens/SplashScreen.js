import React from 'react';
import { Text, View, StyleSheet, Dimensions,StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const SplashScreen = props => {

    return (
        <View style={style.screen}>
            <StatusBar barStyle="light-content" />
            <View style={style.header}>
                <Animatable.Text animation="bounceIn" duration={1500} style={style.headerText}>TELEDOCTOR</Animatable.Text>
            </View>

            <Animatable.View
            animation= "fadeInUpBig"
            duration={1500}
            style={style.footer}>
                <Text style={style.footerTitle}> Welcome </Text>
                <Text style={style.footerTitle}> Stay Connect With Us </Text>
                <Text style={style.footerDesc}> Click button below to continue </Text>
                <View 
                style={style.button}>
                    <TouchableOpacity  style={style.continue} onPress={()=>props.navigation.navigate('Dashboard')}>
                        <Text style={style.continueText}>Continue</Text>
                    </TouchableOpacity >
                </View>
            </Animatable.View>
        </View>
    );
};

const height = Dimensions.get("screen");
const height_logo = height *  0.7 * 0.4;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#05375a'
    },
    imageLogo: {
        height: height_logo,
        width: height_logo,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 40,
        color: '#ffff',
        fontWeight: 'bold'
    },
    footer: {
        flex: 1,
        backgroundColor: '#ffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25
    },
    footerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#05375a'

    },
    footerDesc: {
        fontSize: 14,
        marginLeft: 5,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 40,
    },
    continue: {
        height: 40,
        width: 250,
        backgroundColor: '#5db8fa',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueText: {
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold'
    }
});

export default SplashScreen;