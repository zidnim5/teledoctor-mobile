import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Swiper from 'react-native-swiper'
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

import FloatBtn from '../components/FloatingButton';
import Rating from '../components/StarRating';
import Banner from '../components/Banner';
import Ads from '../components/Ads';
import Fasilities from '../components/Fasilities';


const DashboardScreen = () => {
    return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
            <FloatBtn />
            
            <ScrollView style={{backgroundColor: '#ffff'}}>
                <Banner />   

                <Fasilities />

                <View style={{borderTopWidth:1, borderColor: '#dddd', marginTop: 20}}></View>

                <Text style={style.text_title}>Let Choose The Best For You </Text>
                <View style={{height: 200,}}>
                    <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/doctor1.jpg')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Doctor A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/doctor2.png')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Doctor A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/doctor3.jpg')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Doctor A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>
                        
                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/doctor1.jpg')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Doctor A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/doctor2.png')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Doctor A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/doctor3.jpg')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Doctor A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                    </ScrollView>
                </View>
                
                <View style={{borderTopWidth:1, borderColor: '#dddd', marginTop: 20}}></View>

                <Ads />

                <View style={{borderTopWidth:1, borderColor: '#dddd', marginTop: 20}}></View>
                
                <Text style={style.text_title}>Our Product </Text>
                <View style={{height: 180, marginBottom: 20}}>
                    <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/product1.jpg')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Product A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/product2.png')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Product A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>
                        

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/product1.jpg')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Product A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/product2.png')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Product A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/product1.jpg')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Product A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>

                        <View style={style.card}>
                            <View style={{flex: 3}}>
                                <Image 
                                    source={require('../assets/product2.png')}
                                    resizeMode= 'stretch'
                                    style={style.card_image} 
                                />
                            </View>
                            <View style={{flex:1, alignItems: 'center', paddingBottom: 20}}>
                                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Product A</Text>
                                <Rating ratings={4} reviews={99} />
                            </View>
                        </View>
                        
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    
    text_title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 8,
    },
    
    card: {
        margin: 10,
        width: 130,
        borderWidth: 0.8,
        borderColor: '#dddd',
    },
    card_image: {
        flex: 1,
        width: 128,
        height: 130,
        backgroundColor: '#ffff',
    },  
    card_font: {
        color: '#ffff',
        fontSize: 12,
    },
});

export default DashboardScreen;