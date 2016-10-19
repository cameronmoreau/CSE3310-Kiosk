import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

class MainButton extends Component {
  render() {
    const { children } = this.props;
    console.log(this.props.style);

    return (
      <TouchableHighlight 
        style={[styles.container, this.props.style]} 
        onPress={() => console.log('hello')}>
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
    borderRadius: 4,
    elevation: 3
  },
  text: {
    color: '#fff',
    fontSize: 42,
    height: 100,
    textAlign: 'center',
    fontFamily: 'BebasNeue Regular',
    textAlignVertical: 'center'
  }
})

export default MainButton;