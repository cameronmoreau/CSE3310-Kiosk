import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import IconButton from '../shared/IconButton';

class NavBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    backPressed: PropTypes.func,
    nextPressed: PropTypes.func,
    showNext: PropTypes.bool
  }

  static defaultProps = {
    showNext: false
  }

  render() {
    const { 
      backPressed, 
      nextPressed, 
      finishPressed,
      title,
      showNext
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>

          <IconButton
            onPress={backPressed}
            text="Back"
            backgroundColor="#1E2E39"
            iconLeft="navigate-before" />

          <Text style={styles.title}>{title}</Text>

          { showNext ?
            <IconButton
              onPress={nextPressed}
              text="Next"
              iconRight="navigate-next" />  
            : <View />
          }

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
    backgroundColor: '#2C4253',
    elevation: 4
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 55,
    fontFamily: 'BebasNeue Regular'
  },
  back: {
    backgroundColor: 'gray'
  },
  next: {
    backgroundColor: '#FD7200'
  }
});

export default NavBar;