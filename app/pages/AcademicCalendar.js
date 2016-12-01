import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import NavBar from '../components/shared/NavBar';

class AcademicCalendar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Academic Calendar"
          backPressed={this.props.navigator.pop} />

        <WebView
        source={{uri: 'http://www.uta.edu/uta/acadcal.php'}}
        style={{marginTop: 0}}
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
});

export default AcademicCalendar;