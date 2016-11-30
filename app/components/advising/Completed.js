import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import IconButton from '../shared/IconButton';


class Completed extends Component {
  static propTypes = {
    onPress: PropTypes.func
  }

  render() {
    const { onPress, count } = this.props; 
    console.log('count', count);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You have been added to the waitlist 
          successfully.
        </Text>

        <IconButton
          text={`Dismiss`}
          onPress={onPress}
          backgroundColor="#FD7200" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    margin: 10
  }
});

export default Completed;