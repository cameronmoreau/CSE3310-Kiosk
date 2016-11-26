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
    const { queue } = this.props;
    let pos = 0;

    return (
      <View style={styles.container}>
        { queue.map((item, i) => {
          const current = item.state == 'In Progress';

          let p = -1;
          if(!current) {
            pos += 1;
            p = pos;
          }

          return (
            <StudentQueueItem 
              key={i}
              position={p}
              student={item.student[0]} />
          );
        }) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    padding: 20
  }
})

export default StudentQueueList;