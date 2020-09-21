import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import RegisterScreen from '../screens/AuthScreen/RegisterScreen';
import DashboardScreen from '../screens/MainScreen/DashboardScreen';
import DoctorList from '../screens/MainScreen/DoctorList';
import VideoScreen from '../screens/MainScreen/VideoScreen';


const splash = createStackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    }, 
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    }, 
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    }, 
    Register: {
        screen: RegisterScreen,
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