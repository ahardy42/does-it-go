import { authAPI, userAPI, tracksAPI } from '../utils'

/**
 * action types
 */

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const SET_TRACKS = 'SET_TRACKS';
export const FILTER_TRACKS = 'FILTER_TRACKS';


 /**
  * authentication action creators
  */

const loginUser = user => ({
    type: LOGIN_USER,
    user
});

const signupUser = user => ({
    type: SIGNUP_USER,
    user
});

const logoutUser = () => ({
    type: LOGOUT_USER
});

/**
 * thunks for signup login and logout
 */
export const login = user => async dispatch => {
    try {
        // this is a fetch from the utility functions
        let userInfo = await authAPI.login(user);
        return dispatch(loginUser(userInfo));
        
    } catch (error) {
        console.error(error); // for now
    }
}

export const signup = user => async dispatch => {
    try {
        let userInfo = await authAPI.signup(user);
        return dispatch(signupUser(userInfo));

    } catch (error) {
        console.error(error); // for now
    }
}

export const logout = () => async dispatch => {
    try {
        let bool = await authAPI.logout();
        
        if (bool) return dispatch(logoutUser());

        throw new Error('something happened, user not logged out!');
        
    } catch (error) {
        console.error(error); // for now
    }
}

/**
 * action creators for user edits etc.
 */

const setUser = currentUser => ({
    type: SET_USER,
    currentUser
});

const updateUser = userInfo => ({
    type: UPDATE_USER,
    userInfo
});


/**
 * thunks for async user edits
 */

export const set = () => async dispatch => {
    try {
        let response = await userAPI.set();
        let currentUser = await response.json();

        if (response.ok) {
            return dispatch(setUser(currentUser));
        }
        throw new Error(currentUser);
    } catch (error) {
        console.error(error); // fo now
    }
}

export const update = userInfo => async dispatch => {
    try {
        let response = await userAPI.update(userInfo);
        let updatedUser = await response.json();

        if (response.ok) {
            return dispatch(updateUser(updatedUser));
        }
        throw new Error(updatedUser);
    } catch (error) {
        console.error(error); // for now
    }
}

/**
 * track action creators
 */

const setTracks = tracks => ({
    type: SET_TRACKS,
    tracks
});

const filterTracks = filteredTracks => ({
    type: FILTER_TRACKS,
    filteredTracks
})

/**
 * thunks for async track operations
 */

export const setTracksThunk = () => async dispatch => {
    try {
        let response = await tracksAPI.getAll();
        let tracks = await response.json();

        if (response.ok) {
            return dispatch(setTracks(tracks));
        }
        throw new Error(tracks);
    } catch (error) {
        console.error(error); // for now!
    }
}

export const filterTracksThunk = filters => async dispatch => {
    try {
        let response = await tracksAPI.filter(filters);
        let filteredTracks = await response.json();

        if (response.ok) {
            dispatch(filterTracks(filteredTracks));
        }
        throw new Error(filteredTracks);
    } catch (error) {
        console.error(error);
    }
}

