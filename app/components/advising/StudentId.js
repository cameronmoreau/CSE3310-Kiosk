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
  }

  render() {
    const { form, inputChanged } = this.props;

    return (
      <View style={styles.container}>
        <MainInput
          labelText="Student Id (Mavs 1000 #)"
          onChangeText={(id) => inputChanged('studentId', id) }
          keyboardType="numeric"
          defaultValue={form.studentId} />

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