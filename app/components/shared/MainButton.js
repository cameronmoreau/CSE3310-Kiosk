import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

class MainButton extends Component {
  render() {
    const { children } = this.props;

    return (
      <TouchableHighlight style={styles.container}>
        <Text style={styles.text}>
          { children }
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FD7200',
    borderRadius: 8
  },
  text: {
    color: '#fff',
    fontSize: 48,
    height: 100,
    textAlign: 'center',
    fontFamily: 'BebasNeue Regular',
    textAlignVertical: 'center'
  }
})

export default MainButton;