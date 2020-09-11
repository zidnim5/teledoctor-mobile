import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DashboardScreen from '../screens/DashboardScreen';
import VideoCallScreen from '../screens/VideoCallScreen';

const navigation = createStackNavigator({
    Dashboard: DashboardScreen,
    VideoCall: VideoCallScreen
});


export default createAppContainer(navigation);