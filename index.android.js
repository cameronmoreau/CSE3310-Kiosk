/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import MainMenu from './app/pages/MainMenu';

export default class MavDask extends Component {
  render() {
    return (
      <MainMenu />
    );
  }
}

AppRegistry.registerComponent('MavDask', () => MavDask);
