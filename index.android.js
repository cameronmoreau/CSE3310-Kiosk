/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  AppRegistry,
  Navigator
} from 'react-native';

import MainMenu from './app/pages/MainMenu';
import Help from './app/pages/Help';
import AdvisorForm from './app/pages/AdvisorForm';

export default class MavKiosk extends Component {

  // Renders the pages based off navigation ID
  navigatorRenderScene = (route, navigator) => {
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
