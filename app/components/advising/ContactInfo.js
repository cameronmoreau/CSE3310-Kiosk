import React, {Component} from 'react';
import {
  View
} from 'react-native';

import MainInput from '../shared/MainInput';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View>
        <MainInput
          labelText="First Name"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />

        <MainInput
          labelText="Last Name"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />

        <MainInput
          labelText="Phone"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
    </View>
    );
  }
}

export default ContactInfo;