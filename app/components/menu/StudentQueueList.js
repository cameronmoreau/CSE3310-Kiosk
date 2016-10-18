import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StudentQueueItem from './StudentQueueItem';

class StudentQueueList extends Component {
  render() {
    const tempUsers = [
      1, 2, 3, 4
    ]

    return (
      <View style={styles.container}>
        { tempUsers.map((item, i) => (
          <StudentQueueItem key={i} student={item} />
        )) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  }
})

export default StudentQueueList;