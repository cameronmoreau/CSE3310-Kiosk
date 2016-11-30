/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  AppRegistry,
  Navigator,
  BackAndroid,
  View,
  StatusBar,
  Text
} from 'react-native';

import { apiCall } from './app/services/api';

import Pusher from 'pusher-js/react-native';
Pusher.logToConsole = true;

var pusher = new Pusher('0caec0623dbc96e698fc', {
  encrypted: true
});

import MainMenu from './app/pages/MainMenu';
import Help from './app/pages/Help';
import AdvisorForm from './app/pages/AdvisorForm';
import CourseCatalog from './app/pages/CourseCatalog';
import EmailDropForm from './app/pages/EmailDropForm';

export default class MavKiosk extends Component {

  constructor(props) {
    super(props);

    this.navigator;

    this.state = {
      activeAdvisors: 0,
      estWait: 0,
      queue: []
    }
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if(this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
      }
      return false;
    });

    var channel = pusher.subscribe('kiosk');
    
    channel.bind('my_event', function(data) {
      alert(data.message);
    });

    channel.bind('new_appointment', data => {
      this.state.queue.push(data);
      this.forceUpdate();
    })

    channel.bind('remove_appointment', data => {
      const { queue } = this.state;
      
      for(var i in queue) {
        if(queue[i]._id === data._id) {
          this.state.queue.splice(i, 1);
          this.forceUpdate();
          return;
        }
      }
    })

    channel.bind('update_appointment', data => {
      const { queue } = this.state;
      
      for(var i in queue) {
        if(queue[i]._id === data._id) {
          this.state.queue[i] = data;
          this.forceUpdate();
          return;
        }
      }
    })
  }

  componentDidMount() {
    apiCall('/appointments')
      .then(appointments => {
        for(const a of appointments) {
          this.state.queue.push(a);
        }
        this.forceUpdate();
      })
      .catch(e => alert(e.message));
  }

  // Renders the pages based off navigation ID
  navigatorRenderScene = (route, navigator) => {
    this.navigator = navigator;

    switch(route.id) {
      case 'MainMenu':
        return <MainMenu 
          queue={this.state.queue}
          navigator={navigator} />
      
      case 'AdvisorForm':
        return <AdvisorForm navigator={navigator} />

      case 'Help':
        return <Help navigator={navigator} />

      case 'CourseCatalog':
        return <CourseCatalog navigator={navigator} />

      case 'EmailDropForm':
        return <EmailDropForm navigator={navigator} />
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#1E2E39"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={{ id: 'MainMenu' }}
          renderScene={this.navigatorRenderScene} />
      </View>
    );
  }
}

AppRegistry.registerComponent('MavKiosk', () => MavKiosk);
