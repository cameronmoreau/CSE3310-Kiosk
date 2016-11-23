import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class CompletionBar extends Component {
  render() {
    const { backPressed, nextPressed, finishPressed } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableHighlight 
            style={[styles.btn, styles.back]}
            onPress={backPressed}>
            <View style={styles.btnContainer}>
              <Icon name="navigate-before" size={40} color="#FFF" />
              <Text style={styles.btnText}>Back</Text>
            </View>
          </TouchableHighlight >

          <TouchableHighlight 
            style={[styles.btn, styles.next]}
            onPress={nextPressed}>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>Next</Text>
              <Icon name="navigate-next" size={40} color="#FFF" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnText: {
    fontSize: 38,
    color: '#fff',
    fontFamily: 'BebasNeue Regular'
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    padding: 10,
    borderRadius: 2,
    elevation: 3
  },
  back: {
    backgroundColor: 'gray'
  },
  next: {
    backgroundColor: '#FD7200'
  }
});

export default CompletionBar;