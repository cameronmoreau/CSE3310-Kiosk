import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import IconButton from '../shared/IconButton';

class Confirm extends Component {
  render() {
    return (
      <View>
        <Text>Helloooo</Text>
        
        <View style={styles.btnContainer}>
          <IconButton
            text="No"
            iconLeft="check" />

          <IconButton
            text="Yes"
            iconLeft="close" />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Confirm;