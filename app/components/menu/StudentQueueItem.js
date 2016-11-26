import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class StudentQueueItem extends Component {
  render() {
    const { 
      student, position 
    } = this.props;

    const current = position == -1;

    return (
      <View style={styles.container}>
        <View style={[styles.rank, {backgroundColor: current ? '#FD7200' : '#DEDEDE'}]}>
          { !current && 
            <Text style={styles.rankText}>
              { position }
            </Text>  
          }
        </View>

        <Text style={styles.student}>
          { student.name }
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