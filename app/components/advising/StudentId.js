import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import MainInput from '../shared/MainInput';

class StudentId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MainInput
          labelText="Student Id (Mavs 1000 #)"
          onChangeText={(id) => this.setState({id})}
          value={this.state.id} />

        <Text style={styles.text}>
          Student Id is not required for prospective students
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white'
  }
})

export default StudentId;