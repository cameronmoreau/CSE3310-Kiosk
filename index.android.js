/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  AppRegistry,
  Navigator,
  BackAndroid
} from 'react-native';

import MainMenu from './app/pages/MainMenu';
import Help from './app/pages/Help';
import AdvisorForm from './app/pages/AdvisorForm';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAUVuJpD_bDwDjy9ggyLCTSh9R0vVuQugE",
  authDomain: "subtle-odyssey-128423.firebaseapp.com",
  databaseURL: "https://subtle-odyssey-128423.firebaseio.com",
  storageBucket: "subtle-odyssey-128423.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class MavKiosk extends Component {

  constructor(props) {
    super(props);

    this.navigator;
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if(this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
      }
      return false;
    });
  }
  

  // Renders the pages based off navigation ID
  navigatorRenderScene = (route, navigator) => {
    this.navigator = navigator;

    switch(route.id) {
      case 'MainMenu':
        return <MainMenu navigator={navigator} />
      
      case 'AdvisorForm':
        return <AdvisorForm navigator={navigator} />

      case 'Help':
        return <Help navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'MainMenu' }}
        renderScene={this.navigatorRenderScene} />
    );
  }
}

AppRegistry.registerComponent('MavKiosk', () => MavKiosk);
