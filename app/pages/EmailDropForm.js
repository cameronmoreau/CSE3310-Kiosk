import React, {Component} from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

import MainInput from '../components/shared/MainInput';
import NavBar from '../components/shared/NavBar';
import IconButton from '../components/shared/IconButton';
import { apiCall } from '../services/api';


class EmailDropForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  _onSendPressed = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email
      })
    }

    apiCall('/dropform', options)
      .then(() => this.props.navigator.pop())
      .catch(err => {
        alert(err.message);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Drop Form"
          backPressed={this.props.navigator.pop} />

        <View style={{padding: 25}}>
          <Text style={styles.text}>
            Enter your email to have the drop form sent to you
          </Text>
          <MainInput
            labelText="Email Address"
            onChangeText={(email) => this.setState({email}) }
            keyboardType="email-address" />

          <IconButton
            backgroundColor={(this.state.email.length > 0) ? '#FD7200': 'gray'}
            onPress={this._onSendPressed}
            text="Send Email"/>
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
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white'
  }
});

export default EmailDropForm;