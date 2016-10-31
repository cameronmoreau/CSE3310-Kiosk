import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';

class AdvisorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title="AwesomeApp"
          actions={[{title: 'Settings', show: 'always'}]} />

        <View style={styles.content}>

          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />

          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />

          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
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
  toolbar: {
    backgroundColor: '#455A64',
    height: 56,
  },
  content: {
    padding: 25
  },
  inputLabel: {
    color: '#FFF',
    fontSize: 22
  },
  input: {
    height: 80,
    fontSize: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 25
  }
})

export default AdvisorForm;