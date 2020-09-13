import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';

const Ads = () => {
    return (
        <View style={style.wrapper}>
                <Text style={{marginLeft:20, }}>Advertisement </Text>
                    <Swiper autoplay={true} activeDotColor="#05375a" >
                        <View style={style.slide1}>
                            <Image 
                            source={require('../assets/banner1.jpg')}
                            resizeMode= 'contain'
                            style={style.sliderImage} 
                            />
                        </View>
                    </Swiper>
                </View>
    );
}

const style = StyleSheet.create({
    wrapper: {
        height: 200,
        marginTop: 10,
    },  
    sliderImage: {
      height: '100%',
      width: '90%',
      alignSelf: 'center',
      borderRadius: 8,
     
    },
});

export default Ads;


