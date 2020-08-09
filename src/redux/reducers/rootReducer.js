import postsReducer from './postsReducer'
import {combineReducers} from 'redux';
import ajaxCallsReducer from './ajaxCallsReducer';
import authorsReducer from './authorsReducer';

const rootReducer=combineReducers({
    posts: postsReducer,
    ajaxCalls: ajaxCallsReducer,
    authors:authorsReducer
})
export default rootReducer;