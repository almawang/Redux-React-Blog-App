
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import PostReducer from './postReducer';

const rootReducer = combineReducers({
  count: CountReducer,
  posts: PostReducer,
});

export default rootReducer;
