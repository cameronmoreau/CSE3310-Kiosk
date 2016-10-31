import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import CompletionBar from '../components/form/CompletionBar';

import AdvisingCategories from '../components/advising/AdvisingCategories';
import ContactInfo from '../components/advising/ContactInfo';

class AdvisorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        <AdvisingCategories />,
        <ContactInfo />
      ],
      currentPage: 0
    }
  }

  nextPressed = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  backPressed = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <CompletionBar
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