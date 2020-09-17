import React from 'react';
import {Link} from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {
    const notLogged = () => (
        <nav>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <div>
            <h1>Greetings {currentUser.username}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
    return currentUser ? personalGreeting() : notLogged();
}

export default Greeting;