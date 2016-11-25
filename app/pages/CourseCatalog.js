import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';

import NavBar from '../components/shared/NavBar';

import { apiCall } from '../services/api';

class CourseCatalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: null
    }
  }

  componentDidMount() {
    apiCall('/courses')
      .then(courses => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ courses: ds.cloneWithRows(courses) });
      })
      .catch(err => {
        alert(err.message);
      })
  }

  _renderRow = (data) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.desc}</Text>
      </View>
    );
  }

  _renderSeparator = (sectionID, rowID, adjacentRowHighlighted) => {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }

  render() {
    const { courses } = this.state;

    return (
      <View style={styles.container}>
        <NavBar
          title="CourseCatalog"
          backPressed={this.props.navigator.pop} />

        { courses && 
          <ListView 
            dataSource={courses}
            renderSeparator={this._renderSeparator}
            renderRow={this._renderRow} />  
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    color: '#333',
    marginBottom: 5
  },
  desc: {
    fontSize: 22,
    color: '#333',
  },
  item: {
    padding: 25
  }
});

export default CourseCatalog;