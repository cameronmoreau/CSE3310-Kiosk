import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

const ScreenHeight = Dimensions.get("window").height;

import StudentQueueList from '../components/menu/StudentQueueList';
import MainButton from '../components/shared/MainButton'

import MeetIconImage from '../../assets/images/ic_meet.png';
import BookIconImage from '../../assets/images/ic_book.png';
import FormIconImage from '../../assets/images/ic_form.png';
import HelpIconImage from '../../assets/images/ic_help.png';
import CalendarIconImage from '../../assets/images/ic_calendar.png';

class MainMenu extends Component {

  constructor(props) {
    super(props);

    this.btns = [
      {
        title: 'Meet with an Advisor',
        image: MeetIconImage,
        page: 'AdvisorForm'
      },
      {
        title: 'Course Catalog',
        image: BookIconImage,
        page: 'CourseCatalog'
      },
      {
        title: 'Drop Form',
        image: FormIconImage,
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

  _openPage = (page) => {
    if(page === 'AdvisorForm' && this.props.activeAdvisors < 1) {
      alert('It looks like there aren\'t any advisors available. Please try again later');
    } else {
      this.props.navigator.push({id: page})
    }
  }

  render() {
    const { 
      activeAdvisors, 
      estWait, 
      queue, 
      navigator 
    } = this.props;

    return (
      <Image 
        style={styles.container}
        source={require('../../assets/images/bg_main.jpg')}>

        <ScrollView>
          <View style={styles.sideContainer}>
            <Text style={styles.sideText}>
              Wait List: {queue.length}
            </Text>
            <Text style={styles.sideText}>
              EST Wait: {queue.length * 5} Min
            </Text>
            <StudentQueueList
              queue={queue} />
          </View>
        </ScrollView>

        <View style={styles.menuContainer}>
          <ScrollView>
            { this.btns.map((item, i) => (
              <MainButton
                key={i}
                icon={item.image}
                style={styles.button}
                onClick={() => this._openPage(item.page)}>
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
  sideText: {
    color: 'white',
    fontSize: 44,
    marginTop: 5,
    fontFamily: 'BebasNeue Regular',
    alignSelf: 'center'
  },
  sideContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    minHeight: ScreenHeight - 25
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