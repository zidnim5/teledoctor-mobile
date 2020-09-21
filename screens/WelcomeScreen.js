import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Image,TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';


const WelcomeScreen = props => {

    const screen_height = Dimensions.get('screen').height;
    const screen_width = Dimensions.get('screen').width;

    return (
        <View style={style.screen}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image 
                style={{height:screen_height * 0.7 * 0.4, width :screen_height * 0.7 * 0.4, borderRadius: 50,}}
                source={{ uri: 'https://i.pinimg.com/originals/a0/23/20/a023203087b7ddad7c23a9c2946f1271.png'}} />

                <Text style={{color: 'black', fontSize: 24, marginTop: 40, fontWeight: 'bold'}}>HELLO </Text>
                <View style={{paddingHorizontal: 30}}>
                    <Text style={{color: 'black', marginTop: 10, fontSize: 14, textAlign: 'center', lineHeight: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

                </View>
                
                <View style={{margin: 30, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={ () => props.navigation.navigate('Login')} style={{width: screen_width/2.5, marginRight: 10, backgroundColor: Colors.buttonColorBlue, padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: Colors.accent}}>LOGIN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress= { () => props.navigation.navigate('Register') } style={{width: screen_width/2.5, borderWidth: 1, borderColor: Colors.buttonColorBlue, padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: Colors.primary}}>REGISTER</Text>
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
        backgroundColor: Colors.accent
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

export default WelcomeScreen;