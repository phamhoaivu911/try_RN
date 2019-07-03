import { combineReducers } from 'redux';
import { reducers as apiReducers } from 'redux-api-call';
import { reducer as formReducer } from 'redux-form';

const dumbReducer = () => 'Hello world';

export default combineReducers({
  greeting: dumbReducer,
  form: formReducer,
  ...apiReducers,
});
