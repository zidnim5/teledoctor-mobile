import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DoctorList from '../screens/DoctorList';
import VideoScreen from '../screens/VideoScreen';


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
    DoctorList: {
        screen: DoctorList,
        navigationOptions: {
            title: 'Doctor'
        }
    },
    VideoCall: {
        screen: VideoScreen,
        navigationOptions: {
            title: 'Video Call',
            headerShown: false,
        }
    }
});


export default createAppContainer(splash);