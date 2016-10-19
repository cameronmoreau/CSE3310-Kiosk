import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StudentQueueList from '../components/menu/StudentQueueList';
import MainButton from '../components/shared/MainButton'

class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StudentQueueList />

        <View style={styles.menuContainer}>
          <MainButton style={styles.button}>
            Meet with an Advisor
          </MainButton>
          <MainButton style={styles.button}>
            Advising Calendar
          </MainButton>
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
    color: '#fff',
    fontSize: 32,
    fontFamily: 'BebasNeue Regular'
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30
  }
});

export default MainMenu;