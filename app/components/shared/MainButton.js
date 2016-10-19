import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

class MainButton extends Component {
  
  render() {
    const { children, style, onClick, icon } = this.props;

    return (
      <TouchableHighlight 
        style={[styles.container, style]} 
        onPress={onClick}>

        <View style={styles.view}>
          { icon &&
            <Image source={icon} style={styles.icon} />
          }

          <Text style={styles.text}>
            { children }
          </Text>
        </View>
        
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FD7200',
    borderRadius: 4,
    elevation: 3
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 25,
    left: 20
  },
  text: {
    color: '#fff',
    fontSize: 42,
    height: 100,
    flex: 1,
    textAlign: 'center',
    fontFamily: 'BebasNeue Regular',
    textAlignVertical: 'center'
  }
})

export default MainButton;