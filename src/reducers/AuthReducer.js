const AuthReducer = (state = {
  schoolIds: null,
  currentUser: null,
}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.payload;
    default:
      return state;
  }
};

export default AuthReducer;