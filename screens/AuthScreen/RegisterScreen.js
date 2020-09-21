import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions,StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors';


const RegisterScreen = props => {

    return ( 
    <ScrollView
        showsVerticalScrollIndicator={false}
    >
        <View style={style.screen}>
            <StatusBar barStyle="light-content" />
            <View style={style.header}>
                <Animatable.Text animation="fadeInUpBig" duration={500} style={style.headerText}>Register</Animatable.Text>
            </View>

            <Animatable.View
            animation= "fadeInUpBig"
            duration={500}
            style={style.footer}>
               
                    <Text style={style.footerTitle}> Nama </Text>
                    <TextInput 
                    placeholder="Username"
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:5, paddingLeft: 10, borderRadius: 10, marginTop: 5}} />
                    
                    <Text 
                    style={{...style.footerTitle, marginTop: 20}}> Email </Text>
                    <TextInput
                    textContentType={"emailAddress"}
                    placeholder="example@gmail.com"
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:5, paddingLeft: 10, borderRadius: 10, marginTop: 5}} />
                    
                    <Text 
                    style={{...style.footerTitle, marginTop: 20}}> No.Telp/Hp </Text>
                    <TextInput
                    placeholder="085xxxxxxxxx"
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:5, paddingLeft: 10, borderRadius: 10, marginTop: 5}} />
                    
                    <Text 
                    style={{...style.footerTitle, marginTop: 20}}> Password </Text>
                    <TextInput
                    secureTextEntry={true}
                    placeholder="**********"
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:5, paddingLeft: 10, borderRadius: 10, marginTop: 5}} />
                    
                    <Text 
                    style={{...style.footerTitle, marginTop: 20}}> Ulangi Password </Text>
                    <TextInput
                    secureTextEntry={true}
                    placeholder="**********"
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:5, paddingLeft: 10, borderRadius: 10, marginTop: 5}} />
                    
                    <View 
                    style={style.button}>
                        <TouchableOpacity  style={style.continue} onPress={()=>props.navigation.navigate('Dashboard')}>
                            <Text style={style.continueText}>REGISTER</Text>
                        </TouchableOpacity >
                    </View>
                    
                    <View 
                    style={{marginTop: 40,alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={style.register}>Sudah Punya akun ? </Text> 
                            <TouchableOpacity style={{marginTop: 10, padding: 2, paddingHorizontal: 10}} onPress={ () => props.navigation.navigate('Login')}>
                                <Text style={{color: 'black', fontSize: 12,}}>LOGIN</Text>
                            </TouchableOpacity>
                    </View>
            </Animatable.View>
        </View>
    </ScrollView>
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
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        paddingVertical:20,
        color: Colors.textColor,
        fontWeight: 'bold'
    },
    footer: {
        flex: 3,
        backgroundColor: Colors.accent,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25
    },
    footerTitle: {
        fontSize: 15,
        color: Colors.textColorBlue,
    },
    footerDesc: {
        fontSize: 14,
        marginLeft: 5,
    },
    button: {
        flex: 1,
        marginTop: 20
    },
    continue: {
        height: 40,
        backgroundColor: Colors.buttonColorBlue,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueText: {
        fontSize: 18,
        color: Colors.textColor,
    },
    register: {
        fontSize: 12,
        color: '#A9A9A9',
    }
});

export default RegisterScreen;