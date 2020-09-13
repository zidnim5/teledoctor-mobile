import React from 'react';
import { Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';

const Banner = () => {
    return (
        <View style={style.wrapper}>
            <Swiper autoplay={true} activeDotColor="#05375a" >
                <View style={style.slide1}>
                    <Image 
                    source={require('../assets/banner3.jpg')}
                    resizeMode= 'contain'
                    style={style.sliderImage} 
                    />
                </View>
                <View style={style.slide1}>
                    <Image 
                    source={require('../assets/banner3.jpg')}
                    resizeMode= 'contain'
                    style={style.sliderImage} 
                    />
                </View>
                <View style={style.slide1}>
                    <Image 
                    source={require('../assets/banner3.jpg')}
                    resizeMode= 'contain'
                    style={style.sliderImage} 
                    />
                </View>
            </Swiper>
        </View>
    );
}


export default Banner;

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
