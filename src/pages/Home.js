import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import StudentCard from '../components/cards/StudentCard';
import Student from '../services/student';

const Home = (props) => {

  useEffect(() => {
    if (props.currentUser) {
      Student.index().then(res => {
        props.dispatch({
          type: 'SET_STUDENTS',
          payload: res.data,
        });
      })
    }
  }, [props.currentUser]);


  const renderStudents = () => {
    return props.students.map((student, index) => {
      return <StudentCard key={index} student={student} />
    })
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cardsContainer}>
        {renderStudents()}
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  const { auth, students } = state;
  return {
    schoolIds: auth.school_ids,
    currentUser: auth.user,
    students
  };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});