import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {Entypo,  MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Fasilities = () => {
    return (
    <View style={style.fasilities}>
        <View>
            <View style={style.fasilities_icon}>
                <Entypo name="open-book" size={24} color="#ffff" />
            </View>
            <TouchableOpacity><Text style={style.fasilities_font}>Reservasi</Text></TouchableOpacity>
        </View>
        
        <View>
            <View style={style.fasilities_icon}>
                <MaterialCommunityIcons name="hospital-building" size={24} color="#ffff" />
            </View>
            <TouchableOpacity><Text style={style.fasilities_font}>Hospital</Text></TouchableOpacity>
        </View>
        
        <View>
            <View style={style.fasilities_icon}>
                <Entypo name="news" size={24} color="#ffff" />
            </View>
            <TouchableOpacity><Text style={style.fasilities_font}>News & Tips</Text></TouchableOpacity>
        </View>
        
        <View>
            <View style={style.fasilities_icon}>
                <Entypo name="heart" size={24} color="#ffff" />
            </View>
            <TouchableOpacity><Text style={style.fasilities_font}>Wellness</Text></TouchableOpacity>
        </View>
    </View>
    );
}

const style = StyleSheet.create({
    fasilities: {
        marginLeft:20,
        marginRight: 20,
        marginTop:10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fasilities_icon:{
        width: 50,
        padding: 12,
        backgroundColor: '#5db8fa',
        borderRadius: 100,
        alignItems: 'center',
    },
    fasilities_font: {
        marginTop: 6,
        fontSize: 11,
    },
});

export default Fasilities;