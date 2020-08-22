/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Amplify from 'aws-amplify'
import App from './src/App';
import {name as appName} from './app.json';
import config from './aws-exports'

Amplify.configure(config)

AppRegistry.registerComponent(appName, () => App);
