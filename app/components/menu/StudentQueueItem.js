import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class StudentQueueItem extends Component {
  render() {
    const { student } = this.props;

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
    borderRadius: 4,
    marginBottom: 15,
    height: 60
  },
  rank: {
    backgroundColor: '#DEDEDE',
    padding: 10,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4
  },
  rankText: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  student: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});


export default StudentQueueItem;