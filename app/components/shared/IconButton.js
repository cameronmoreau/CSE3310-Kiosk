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
    onPress: PropTypes.func,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    backgroundColor: PropTypes.string,
    styles: PropTypes.object
  }

  static defaultProps = {
    backgroundColor: 'gray',
    styles: {},
    iconSize: 40
  }

  render() {
    // Basic Props
    const { 
      iconLeft, iconRight,
      iconSize, onPress,
      text, backgroundColor
    } = this.props;

    // Style Props
    const textStyle = this.props.styles.text;
    const containerStyle = this.props.styles.container;
    
    let iLeft, iRight;

    if(iconLeft) iLeft = (<Icon name={iconLeft} size={iconSize} color="#FFF" />);
    if(iconRight) iRight = (<Icon name={iconRight} size={iconSize} color="#FFF" />);

    return (
      <TouchableHighlight
        style={[styles.touch, containerStyle, { backgroundColor }]}
        onPress={onPress}>
        <View style={styles.container}>
          {iLeft}
          <Text style={[styles.text, textStyle]}>{ text }</Text>
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
    justifyContent: 'center'
  },
  touch: {
    padding: 10,
    borderRadius: 2,
    elevation: 3
  }
});

export default IconButton;