/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './Home';

const AppNavigator = createStackNavigator({
    App: {
        screen: App
    },
    Home: {
        screen: HomeScreen
    }
});

const AppContainer = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => AppContainer);
