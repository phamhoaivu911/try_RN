import { combineReducers } from 'redux';
import { reducers as apiReducers } from 'redux-api-call';
import { reducer as formReducer } from 'redux-form';
import loggedInReducer from '../components/Login/state';
import selectedBookReducer from '../components/BookList/state';

const dumbReducer = () => 'Hello world';

export default combineReducers({
  greeting: dumbReducer,
  form: formReducer,
  ...selectedBookReducer,
  ...loggedInReducer,
  ...apiReducers,
});
