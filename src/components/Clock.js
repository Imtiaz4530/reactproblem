import React from 'react';
// yarn start
// cd myreact

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { zone } = this.props;
        const { date } = this.state;
        return (
            <h1 className="heading">
                <span className="text">Assalamualaikum, {date.toLocaleTimeString(zone)}</span>
            </h1>
        );
    }
}

export default Clock;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function Welcome(props) {
//     const { name } = props;
//     return <h1>Hello, {name}</h1>;
// }

// const element = <Welcome name="Imtiaz" />;
// ReactDOM.render(element, document.getElementById('root'));
