import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

class MainInput extends Component {
  render() {
    const { labelText, value, onChangeText, defaultValue } = this.props;

    return (
      <View>
        <Text style={styles.inputLabel}>{labelText}</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)'
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#FFF',
    fontSize: 22,
    marginBottom: 5
  },
  input: {
    height: 70,
    fontSize: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 25,
    borderRadius: 4,
    elevation: 3
  }
})

export default MainInput;