import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { apiCall } from '../services/api';

import NavBar from '../components/shared/NavBar';
import Confirm from '../components/form/Confirm';

import AdvisingCategories from '../components/advising/AdvisingCategories';
import ContactInfo from '../components/advising/ContactInfo';
import StudentId from '../components/advising/StudentId';

class AdvisorForm extends Component {
  constructor(props) {
    super(props);
    const form = {
      studentId: '',
      firstName: '',
      lastName: '',
      phone: '',
      category: null,
    }

    this.state = {
      pages: [
        {
          component: <StudentId form={form} inputChanged={this._formInputChanged} />,
          title: 'Student ID',
          showNext: true
        },
        {
          component: <ContactInfo form={form} inputChanged={this._formInputChanged} />,
          title: 'Contact Info',
          showNext: true
        },
        {
          component: <AdvisingCategories onSelected={this._categorySelected} />,
          title: 'Appointment Type'
        },
        // {
        //   component:<Confirm text="Uhhh" />,
        //   title: 'Confirm'
        // }
      ],
      currentPage: 0,
      form
    }
  }

  _formInputChanged = (key, value) => {
    this.state.form[key] = value;
  }

  _categorySelected = (type) => {
    this.state.form.category = type;
    this.nextPressed();
  }

  _sendRequest = (type) => {
    const form = this.state.form;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        student: {
          name: `${form.firstName} ${form.lastName}`,
          studentId: form.studentId,
          phoneNumber: form.phone
        },
        type: 'Advising',
        description: form.category
      })
    }

    // Do the request
    apiCall('/appointments', options)
      .then(res => this.props.navigator.pop())
      .catch(e => alert(e.message));
  }

  nextPressed = () => {
    const { currentPage, pages } = this.state;

    if(currentPage < pages.length - 1) {
      this.setState({ currentPage: currentPage + 1 });
    } else {
      this._sendRequest();
    }
  }

  backPressed = () => {
    const { currentPage } = this.state;
    if(currentPage == 0) {
      this.props.navigator.pop();
    } else {
      this.setState({ currentPage: currentPage - 1 });
    }
  }

  render() {
    const page = this.state.pages[this.state.currentPage];

    return (
      <View style={styles.container}>
        <NavBar
          nextPressed={this.nextPressed}
          backPressed={this.backPressed}
          title={page.title}
          showNext={page.showNext} />

        <View style={styles.content}>
          { page.component }
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
  content: {
    //padding: 25
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