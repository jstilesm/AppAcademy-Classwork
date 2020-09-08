import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';


const tabs = [{
    title: 'first',
    content: 'this is the first tab!'
}, {
    title: 'second',
    content: 'this is the second tab!'
}, {
    title: 'third',
    content: 'this is the third tab!'
}, {
    title: 'fourth',
    content: 'this is the fourth tab!'
}];

function Root() {
    return(
        <div>
            <Clock />
            <Tabs tabs={tabs}  />
            <Weather />
        </div>
    )


}





document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
});
