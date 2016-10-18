import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StudentQueueList from '../components/menu/StudentQueueList';

class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StudentQueueList />

        <View style={styles.menuContainer}>
          <Text>Hello!</Text>
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

export default MainMenu;