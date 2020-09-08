import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.bindtick = this.tick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.bindtick, 1000);        
    }

    componentWillUnmount() {
        clearInterval(this.interval);

    }

    tick() {
        this.setState({ date: new Date()})
    }



    render() {
        let hours = this.state.date.getHours();
        let minutes = this.state.date.getMinutes();
        let seconds = this.state.date.getSeconds();

        
        return (
            <div>
                <h1>Clock:</h1>
                <div className="clock">
                    <h1 className="header">Time:</h1>
                    <p>{hours}:{minutes}:{seconds}</p>
                    <br />
                    <h1 className="header">Date:</h1>
                    <p>{this.state.date.toDateString()}</p>
                </div>
            </div >
        );
    }
}

export default Clock;