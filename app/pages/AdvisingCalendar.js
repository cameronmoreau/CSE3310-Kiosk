import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Image
} from 'react-native';

import NavBar from '../components/shared/NavBar';

class AdvisingCalendar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Advising Calendar"
          backPressed={this.props.navigator.pop} 
        />
        <Image
          style={styles.calendar}
          source={require('../../assets/images/advising_december.png')}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#344D61',
  },
  calendar: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'row',
    width: undefined,
    height: undefined,
    justifyContent: 'center'
  }
});

export default AdvisingCalendar;