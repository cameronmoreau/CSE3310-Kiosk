import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NavBar from '../components/shared/NavBar';
import Confirm from '../components/form/Confirm';

import AdvisingCategories from '../components/advising/AdvisingCategories';
import ContactInfo from '../components/advising/ContactInfo';
import StudentId from '../components/advising/StudentId';

class AdvisorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        <Confirm text="Uhhh" />,
        <StudentId />,
        <ContactInfo />,
        <AdvisingCategories />,
      ],
      currentPage: 0
    }
  }

  nextPressed = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
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
    return (
      <View style={styles.container}>
        <NavBar
          nextPressed={this.nextPressed}
          backPressed={this.backPressed} />

        <View style={styles.content}>
          { this.state.pages[this.state.currentPage] }
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