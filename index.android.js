/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MavDask extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.studentQueueContainer}>
          <Text>Item</Text>
          <Text>Item</Text>
          <Text>Item</Text>
        </View>

        <View style={styles.menuContainer}>
          <Text>Hello!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#344D61'
  },
  menuContainer: {
    flex: 3
  },
  studentQueueContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  },
  text: {
    color: '#fff'
  }
});

AppRegistry.registerComponent('MavDask', () => MavDask);
