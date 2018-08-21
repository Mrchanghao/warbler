import { SET_CURRENT_USER } from "../actionTypes";


const default_state = {
    isAuthenticated: false, // be true when user logged in
    user: {} // all the user info when the logged in
}

export default (state = default_state, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                // isAuthenticated: !!Object.keys(action.user).length
                isAuthenticated: Object.keys(action.user).length  > 0 ,
                user: action.user
            };
        default: 
            return state;
    }
}