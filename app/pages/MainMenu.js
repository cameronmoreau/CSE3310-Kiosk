import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import StudentQueueList from '../components/menu/StudentQueueList';
import MainButton from '../components/shared/MainButton'

class MainMenu extends Component {

  gotoAdvisorForm = () => {
    this.props.navigator.push({
      id: 'AdvisorForm'
    });
  }

  gotoHelp = () => {
    this.props.navigator.push({
      id: 'Help'
    });
  }

  gotoCourseCatalog = () => {
    this.props.navigator.push({
      id: 'CourseCatalog'
    });
  }

  render() {
    const { activeAdvisors, estWait, queue } = this.props;

    return (
      <Image 
        style={styles.container}
        source={require('../../assets/images/bg_main.jpg')}>

        <StudentQueueList
          queue={queue} />

        <View style={styles.menuContainer}>
          <MainButton 
            icon={require('../../assets/images/ic_help.png')}
            style={styles.button}
            onClick={this.gotoAdvisorForm}>
            Meet with an Advisor
          </MainButton>

          <MainButton 
            icon={require('../../assets/images/ic_calendar.png')}
            style={styles.button}
            onClick={this.gotoHelp}>
            Advising Calendar
          </MainButton>

          <MainButton 
            icon={require('../../assets/images/ic_calendar.png')}
            style={styles.button}
            onClick={this.gotoCourseCatalog}>
            Course Catalog
          </MainButton>
        </View>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center'
  },
  bg: {
    flex: 1,
    resizeMode: 'cover'
  },
  menuContainer: {
    flex: 3,
    marginTop: 15
  },
  studentQueueContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'BebasNeue Regular'
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30
  }
});

export default MainMenu;