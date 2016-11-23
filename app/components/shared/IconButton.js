import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class IconButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    backgroundColor: PropTypes.string
  }

  static defaultProps = {
    backgroundColor: 'gray'
  }

  render() {
    const { 
      iconLeft, iconRight,
      text, backgroundColor
    } = this.props;
    
    let iLeft, iRight;

    if(iconLeft) iLeft = (<Icon name={iconLeft} size={40} color="#FFF" />);
    if(iconRight) iRight = (<Icon name={iconRight} size={40} color="#FFF" />);

    return (
      <TouchableHighlight
        onPress={() => console.log('press')}>
        <View style={[styles.container, { backgroundColor }]}>
          {iLeft}
          <Text style={styles.text}>{ text }</Text>
          {iRight}
        </View>
      </TouchableHighlight >
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 38,
    color: '#fff',
    fontFamily: 'BebasNeue Regular'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 2,
    elevation: 3,
    backgroundColor: 'cyan'
  }
});

export default IconButton;