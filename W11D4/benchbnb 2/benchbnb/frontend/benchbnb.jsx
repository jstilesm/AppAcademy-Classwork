import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { postUser, postSession, deleteSession } from './util/session_api_util';
import {logout, login, signup } from './actions/session_actions'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // Testing Start
    window.login = login;
    window.logout= logout;
    window.signup = signup;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // Testing End

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});