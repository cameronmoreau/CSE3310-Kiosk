import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class StudentQueueItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rank}>
          <Text style={styles.rankText}>1</Text>
        </View>

        <Text style={styles.student}>
          Student Name
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    marginBottom: 15
  },
  rank: {
    backgroundColor: '#DEDEDE',
    padding: 10,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  rankText: {
    fontSize: 18
  },
  student: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});


export default StudentQueueItem;