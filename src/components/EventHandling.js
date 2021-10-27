import React from 'react';
import Button from './Button';
// yarn start
// cd myreact

class Ehandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'bn-BD' };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        // let button;
        // if (locale === 'bn-BD') {
        //     button = (
        //         <Button change={this.handleClick} locale="en-US">
        //             Lang change
        //         </Button>
        //     );
        // } else {
        //     button = (
        //         <Button change={this.handleClick} locale="bn-BD">
        //             Lang change
        //         </Button>
        //     );
        // }
        return (
            <div>
                <h1 className="heading">
                    <span className="text">Assalamualaikum, {date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} enable={false} />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show enable />
                )}
            </div>
        );
    }
}
// class Ehandling extends React.Component {
//     state = { date: new Date(), locale: 'bn-BD' };

//     componentDidMount() {
//         this.clockTimer = setInterval(() => this.tick(), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.clockTimer);
//     }

//     handleClick = (locale) => {
//         this.setState({
//             locale,
//         });
//     };

//     tick() {
//         this.setState({
//             date: new Date(),
//         });
//     }

//     render() {
//         const { date, locale } = this.state;
//         return (
//             <div>
//                 <h1 className="heading">
//                     <span className="text">{date.toLocaleTimeString(locale)}</span>
//                 </h1>
//                 {locale === 'bn-BD' ? (
//                     <Button change={this.handleClick} locale="en-US" show={false} enable={false} />
//                 ) : (
//                     <Button change={this.handleClick} locale="bn-BD" show enable />
//                 )}
//             </div>
//         );
//     }
// }

export default Ehandling;
