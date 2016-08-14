
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import PostReducer from './postReducer';
import AuthReducer from './auth-reducer';
import ErrorReducer from './error-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  posts: PostReducer,
  authenticated: AuthReducer,
  err: ErrorReducer,
});

export default rootReducer;
