import React from 'react';
import { StyleSheet } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import ActionButton from 'react-native-action-button';

const floatBtn = () => {
    return (
    <ActionButton useNativeDriver={true} buttonColor="rgba(231,76,60,1)" renderIcon={ () => <AntDesign name="appstore1" style={style.actionButtonIcon} />} style={{zIndex: 100,}}>
        <ActionButton.Item buttonColor='#9b59b6' title="Meet Doctor" onPress={() => console.log("notes tapped!")}>
        <MaterialCommunityIcons name="video-wireless-outline" style={style.actionButtonIcon} />
        </ActionButton.Item>
    </ActionButton>
    );
}

const style = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

export default floatBtn;

