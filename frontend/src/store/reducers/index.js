import {combineReducers} from 'redux';
import errors from './errors';
import currentUser from './currentUser';


const rootReducers = combineReducers({
    errors: errors,
    currentUser: currentUser
});



export default rootReducers
