import { postUser, deleteSession, postSession } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


//thunk action creators
export const login = user => dispatch => postSession(user)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));

export const signup = user => dispatch => postUser(user)
    .then(user => dispatch(receiveCurrentUser(user)));


//relgr action creators

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});
export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});



