import React from 'react';

class Register extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://intense-thicket-30808.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        }).then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <div className="container login-container shadow-2">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3 className="text-white">Register</h3>
                        <div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name *" onChange={this.onNameChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email *" onChange={this.onEmailChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" onChange={this.onPasswordChange} />
                            </div>
                            <div className="form-group">
                                <input onClick={ this.onSubmitSignIn } type="submit" className="btnSubmit" value="Register"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;