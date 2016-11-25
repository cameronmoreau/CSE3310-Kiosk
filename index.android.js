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

import Pusher from 'pusher-js/react-native';
Pusher.logToConsole = true;

var pusher = new Pusher('0caec0623dbc96e698fc', {
  encrypted: true
});

import MainMenu from './app/pages/MainMenu';
import Help from './app/pages/Help';
import AdvisorForm from './app/pages/AdvisorForm';
import CourseCatalog from './app/pages/CourseCatalog';

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

    var channel = pusher.subscribe('test_channel');
    channel.bind('my_event', function(data) {
      alert(data.message);
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

      case 'CourseCatalog':
        return <CourseCatalog navigator={navigator} />
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
