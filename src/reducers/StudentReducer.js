const StudentReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STUDENTS':
      return action.payload;
    default:
      return state;
  }
};

export default StudentReducer;