import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import StudentQueueList from '../components/menu/StudentQueueList';
import MainButton from '../components/shared/MainButton'

import HelpIconImage from '../../assets/images/ic_help.png';
import CalendarIconImage from '../../assets/images/ic_calendar.png';

class MainMenu extends Component {

  constructor(props) {
    super(props);

    this.btns = [
      {
        title: 'Meet with an Advisor',
        image: HelpIconImage,
        page: 'AdvisorForm'
      },
      {
        title: 'Course Catalog',
        image: HelpIconImage,
        page: 'CourseCatalog'
      },
      {
        title: 'Drop Form',
        image: HelpIconImage,
        page: 'EmailDropForm'
      },
      {
        title: 'Advising Calendar',
        image: CalendarIconImage,
        page: 'AdvisingCalendar'
      },
      {
        title: 'Academic Calendar',
        image: CalendarIconImage,
        page: 'AcademicCalendar'
      },
    ]
  }

  render() {
    const { activeAdvisors, estWait, queue, navigator } = this.props;

    return (
      <Image 
        style={styles.container}
        source={require('../../assets/images/bg_main.jpg')}>

        <StudentQueueList
          queue={queue} />

        <View style={styles.menuContainer}>
          <ScrollView>
            { this.btns.map((item, i) => (
              <MainButton
                key={i}
                icon={item.image}
                style={styles.button}
                onClick={() => navigator.push({id: item.page})}>
                { item.title }
              </MainButton> 
            ))}
          </ScrollView>
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