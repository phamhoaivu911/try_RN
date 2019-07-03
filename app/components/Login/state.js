const loggedInReducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return true;
    default:
      return false;
  }
};

const isLoggedInSelector = state => state.loggedIn;

export { isLoggedInSelector };

export default { loggedIn: loggedInReducer };
