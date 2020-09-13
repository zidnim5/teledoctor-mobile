import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen';
import DashboardScreen from '../screens/DashboardScreen';
import VideoScreen from '../screens/VideoCallScreen';


const splash = createStackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    }, 
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            headerLeft: ()=> null,
        }
    },
    Video: {
        screen: VideoScreen,
    }
});


export default createAppContainer(splash);