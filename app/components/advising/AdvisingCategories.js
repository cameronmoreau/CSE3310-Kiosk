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
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          title: 'Drops',
        },
        {
          title: 'Academic Holds',
        },
        {
          title: 'Check Graduation',
        },
        {
          title: 'Prospective Students',
        },
        {
          title: 'Add a Course',
        },
        {
          title: 'Change Major/Minor',
        }
      ]
    }
  }

  render() {
    const { categories } = this.state;
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={styles.scroll}>
          { categories.map((item, index) => (
            <MainButton 
              key={index}
              style={{marginBottom: 25}}>
              { item.title }
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