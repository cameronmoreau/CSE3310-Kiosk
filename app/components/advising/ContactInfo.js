import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import MainInput from '../shared/MainInput';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { form, inputChanged } = this.props;

    return (
      <View style={styles.container}>
        <MainInput
          labelText="First Name"
          onChangeText={(input) => inputChanged('firstName', input)}
          defaultValue={form.firstName} />

        <MainInput
          labelText="Last Name"
          onChangeText={(input) => inputChanged('lastName', input)}
          defaultValue={form.lastName} />

        <MainInput
          labelText="Phone"
          onChangeText={(input) => inputChanged('phone', input)}
          defaultValue={form.phone} />
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