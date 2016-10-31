import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
      <View>
        { categories.map((item, index) => (
          <MainButton 
            key={index}
            style={{marginBottom: 25}}>
            { item.title }
          </MainButton>
        )) }
      </View>
    );
  }
}

export default AdvisingCategories;