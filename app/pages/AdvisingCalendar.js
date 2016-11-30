import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import NavBar from '../components/shared/NavBar';

class AdvisingCalendar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Advising Calendar"
          backPressed={this.props.navigator.pop} />

        <WebView
        source={{uri: 'https://cse.uta.edu/current-students/undergraduate-studies.php'}}
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

export default AdvisingCalendar;