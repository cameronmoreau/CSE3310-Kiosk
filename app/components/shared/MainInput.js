import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

class MainInput extends Component {
  render() {
    const { labelText, value, onChangeText } = this.props;

    return (
      <View>
        <Text style={styles.inputLabel}>{labelText}</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#FFF',
    fontSize: 22
  },
  input: {
    height: 80,
    fontSize: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 25
  }
})

export default MainInput;