import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');

import MainButton from '../shared/MainButton';

class AdvisingCategories extends Component {
  static showNext = true

  constructor(props) {
    super(props);

    this.state = {
      categories: [
        'Drops', 'Academic Holds', 'Check Graduation',
        'Prospective Students', 'Add a Course', 
        'Change Major/Minor'
      ]
    }
  }

  render() {
    const { categories } = this.state;
    const { onSelected } = this.props;

    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={styles.scroll}>
          { categories.map((item, index) => (
            <MainButton 
              key={index}
              onClick={() => onSelected(item) }
              style={{marginBottom: 25}}>
              { item }
            </MainButton>
          )) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    height: windowSize.height - 80 - 25, //BUG
    padding: 25
  }
});

export default AdvisingCategories;