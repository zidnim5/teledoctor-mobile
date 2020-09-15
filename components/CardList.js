import React from 'react';

import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import {Entypo} from '@expo/vector-icons';
import Rating from '../components/StarRating';

const CardList = (props) => {
    return (
        <ScrollView>
            <View style={style.card}>
                <View>
                    <Image 
                        source={require('../assets/doctor1.jpg')}
                        resizeMode= 'cover'
                        style={style.card_image} 
                    />
                </View>
                <View style={style.card_desc}>
                    <Text style={{fontWeight: 'bold', fontSize: 15,}}>Zidni Mujib</Text>
                    <Text style={{color:'green', marginBottom: 5,fontSize: 12,}}>Available</Text>
                    <Rating ratings={4} reviews={99} />
                </View>
                <View style={{flex: 1, alignItems:"flex-end"}}>
                    <View>
                        <TouchableOpacity  style={style.continue} onPress={ () => props.navigation.navigate('VideoCall') }>
                            <Entypo name="video-camera" style={{color: '#fff', fontSize:15,}}></Entypo>
                        </TouchableOpacity >
                    </View>
                </View>
            </View>
            
        </ScrollView>
    );
}

const style = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff'
    },  
    card_image: {
        height: 70,
        width: 70,
        borderRadius: 50
    },
    card_desc: {
        marginLeft: 11,
    },
    continue: {
        padding: 13,
        backgroundColor: '#5db8fa',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default CardList;