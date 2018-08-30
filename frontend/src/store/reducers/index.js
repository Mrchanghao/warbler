import {combineReducers} from 'redux';
import errors from './errors';
import currentUser from './currentUser';
import messages from './messages';


const rootReducers = combineReducers({
    errors: errors,
    currentUser: currentUser,
    messages
});



export default rootReducers
