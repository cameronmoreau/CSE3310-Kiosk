import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';

import { apiCall } from '../services/api';

import NavBar from '../components/shared/NavBar';
import Confirm from '../components/form/Confirm';

import AdvisingCategories from '../components/advising/AdvisingCategories';
import ContactInfo from '../components/advising/ContactInfo';
import StudentId from '../components/advising/StudentId';
import Completed from '../components/advising/Completed';

class AdvisorForm extends Component {
  constructor(props) {
    super(props);
    const form = {
      studentId: '',
      firstName: '',
      lastName: '',
      phone: '',
      category: null
    }

    this.state = {
      timer: 10,
      submitted: false,
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

  _addCreated = () => {
    const self = this;

    const timer = setInterval(() => {
      // Timer done
      if(this.state.timer <= 0) {
        clearInterval(timer);
        this.props.navigator.pop();
      }
      console.log('tick', this.state.timer);

      self.setState({
        timer: this.state.timer - 1
      })
    }, 1000)

    this.state.pages.push({
      title: 'Success',
      component: (
        <Completed
          onPress={() => {clearInterval(timer); this.props.navigator.pop(); }} />
      )
    });
  }

  _addConfirmPage = (text, noText) => {
    const onNo = () => {
      Alert.alert('Uh oh', noText, [
        {text: 'Okay', onPress: () => this.props.navigator.pop()}
      ])
    }

    this.state.pages.push({
      title: 'Confirm',
      component: (
        <Confirm 
          text={text} 
          onNo={onNo} 
          onYes={this.nextPressed} />
      )
    });
  }

  _formInputChanged = (key, value) => {
    this.state.form[key] = value;
  }

  _categorySelected = (type) => {
    this.state.form.category = type;

    switch(type) {
      case 'Add a Course':
        this._addConfirmPage(
          'Do you already know which courses you want to take ' +
          'and their course numbers?',
          'Please figure that out and create another appointment'
        );
        break;

      case 'Academic Holds':
        this._addConfirmPage(
          'Are all of the following field in the form completed?\n\n' +
          '- Student information\n' +
          '- Course requests\n' +
          '- Student signature and date',
          'Please fill these fields out and create another appointment'
        );
        break;

      case 'Drops':
        this._addConfirmPage(
          'Is the drop form filled out and signed?',
          'Please fill that out and create another appointment. ' +
          'If you need the form, it is available from the ' +
          'main menu'
        );
        break;
    }

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
      .then(res => {
        this.setState({submitted: true});
        this._addCreated();
        this.nextPressed();
      })
      .catch(e => alert(e.message));
  }

  nextPressed = () => {
    const { currentPage, pages, submitted } = this.state;

    if(currentPage < pages.length - 1) {
      this.setState({ currentPage: currentPage + 1 });
    } else {
      if(!submitted) {
        this._sendRequest();
      }
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