import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class CompletionBar extends Component {
  render() {
    const { backPressed, nextPressed, finishPressed } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableHighlight 
            style={[styles.btn, styles.back]}
            onPress={backPressed}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableHighlight >

          <TouchableHighlight 
            style={[styles.btn, styles.next]}
            onPress={nextPressed}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    padding: 15,
    backgroundColor: '#ccc',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnText: {
    fontSize: 28,
    color: '#fff'
  },
  back: {
    backgroundColor: 'gray'
  },
  next: {
    backgroundColor: 'blue'
  }
});

export default CompletionBar;