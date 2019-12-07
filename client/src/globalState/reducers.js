import { combineReducers } from 'redux';
import {
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_USER,
    SET_USER,
    UPDATE_USER,
    SET_TRACKS,
    FILTER_TRACKS
} from './actions';

/**
 * shape of the state
 * 
 * 2 types of global state for this app
 * 
 * 1. user information to display, and to be edited
 * 2. track information to display, filter and be edited
 * 
 */

/**
 * reducer for authentications
 */

const initialAuthState = {
    isLoggedIn: false,
    username: '',
    isSignup: false // flag to let app know user has just signed up
}

const authReducer = (state = initialAuthState, {type, user}) => {
    switch (type) {
        case LOGIN_USER:
            return user;
        case SIGNUP_USER:
            return user;
        case LOGOUT_USER:
            return initialUserState;
        default:
            return state;
    }
}

/**
 * reducer for user operations
 */

const initialUserState = {
    name: '',
    city: '',
    state: '',
    coords: [],
    defaultActivity: '',
    trackList: []
}

const userReducer = (state = initialUserState, {type, payload}) => {
    switch (type) {
        case SET_USER:
            return payload
        case UPDATE_USER:
            return payload
        default:
            return state;
    }
}

/**
 * reducer for tracks filtering etc.
 */

const tracksReducer = (state = [], {type, tracks}) => {
    switch (type) {
        case SET_TRACKS:
            return tracks;
        case FILTER_TRACKS:
            return tracks;
        default:
            return state;
    }
}

const globalReducer = combineReducers({
    authReducer,
    userReducer,
    tracksReducer
});

export default globalReducer;