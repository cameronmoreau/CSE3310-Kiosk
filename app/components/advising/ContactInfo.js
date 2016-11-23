import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import MainInput from '../shared/MainInput';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MainInput
          labelText="First Name"
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.firstName} />

        <MainInput
          labelText="Last Name"
          onChangeText={(lastName) => this.setState({lastName})}
          value={this.state.lastNametext} />

        <MainInput
          labelText="Phone"
          onChangeText={(phone) => this.setState({phone})}
          value={this.state.phone} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  }
})

export default ContactInfo;