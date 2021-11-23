import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { translate } from "../../locales";

const StudentCard = (props) => {
  const { student } = props;

  return (
    <TouchableOpacity style={styles.container} >
      <Image source={{uri: student.photo}} style={styles.image}/>
      <Text>{`${student.first_name} ${student.last_name}`}</Text>
      <Text style={styles.email}>{student.email}</Text>
      <Text style={styles.className}>{student.class_name}</Text>
      <Text style={styles.classType}>
        {translate(`components.student_card.class_type.${student.class_type}`)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8fa',
    width: 120,
    height: 200,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 30,
  },
  className: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },
  classType: {
    fontSize: 10,
    color: '#8c8c8c',
  },
  email: {
    fontSize: 10,
    color: '#8c8c8c',
  }
});

export default StudentCard;