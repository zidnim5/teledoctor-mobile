import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import {Entypo} from '@expo/vector-icons';
import Rating from '../../components/StarRating';

import CardList from '../../components/CardList';
import CardListDeactive from '../../components/CardListDeactive';

const DoctorList = (props) => {
    return (
        <ScrollView>
            <CardList navigation={props.navigation}/>
            <CardListDeactive />
            <CardListDeactive />
            <CardListDeactive />
            <CardListDeactive />
            <CardListDeactive />
            <CardListDeactive />
            <CardListDeactive />
        </ScrollView>
    );
};

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

export default DoctorList;