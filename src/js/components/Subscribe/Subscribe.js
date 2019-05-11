import React, { Component } from 'react';

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            changeCheck: false,
            isInvalid: false,
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserInput(e) {
        const value = e.target.value;
        this.setState({
            email: value,
        });
        if (this.state.changeCheck) {
            let isEmailValid = this.validate(value);
            this.setState({
                isInvalid: isEmailValid,
            });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const value = this.state.email;
        let isEmailValid = this.validate(value);
        this.setState({
            isInvalid: isEmailValid,
            changeCheck: true,
        });
    }
    validate(val) {
        let emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return emailValid ? false : true;
    }
    render() {
        return (
            <div className="footer-subscribe">
                <div className="title">Sign up for newsleter!</div>
                <div className="subtitle">Stay informed of the last company news</div>
                <div className="form">
                    <form action="#" onSubmit={this.handleSubmit}>
                        <div className="fieldset">
                            <div className={'input ' + (this.state.isInvalid ? 'invalid' : '')}>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    onChange={this.handleUserInput}
                                />
                                {this.state.isInvalid ? (
                                    <div className="error">email is invalid</div>
                                ) : (
                                    ''
                                )}
                            </div>
                            <button className="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Subscribe;
