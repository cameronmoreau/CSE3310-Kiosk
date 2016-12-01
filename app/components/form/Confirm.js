import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import IconButton from '../shared/IconButton';

class Confirm extends Component {
  
  static propTypes = {
    onNo: PropTypes.func,
    onYes: PropTypes.func,
    text: PropTypes.string
  }

  render() {
    const iconSize = 60;
    const btnStyle = {
      text: { fontSize: 54 },
      container: { 
        width: 200, 
        marginLeft: 10, 
        marginRight: 10 
      }
    }

    const { onNo, onYes, text } = this.props;

    return (

      <View>
        <Text style={styles.text}>{text}</Text>
        
        <View style={styles.btnContainer}>
          <IconButton
            iconSize={iconSize}
            styles={btnStyle}
            backgroundColor="#e74c3c"
            text="No"
            onPress={onNo}
            iconLeft="close" />

          <IconButton
            iconSize={iconSize}
            styles={btnStyle}
            backgroundColor="#2ecc71"
            text="Yes"
            onPress={onYes}
            iconLeft="check" />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    padding: 25
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Confirm;