import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

   onSubmitSignIn = () => {
    fetch('https://intense-thicket-30808.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
    }

    render()
    {
        const { onRouteChange } = this.props;
        return (
            <div className="container login-container shadow-2 needs-validation" >
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3 className="text-white">Sign In</h3>
                        <p className="d-none text-danger">Wrong Email or Password</p>
                        <div>
                            <div className="form-group">
                                <input onChange={ this.onEmailChange } type="email" className="form-control" placeholder="Your Email *" required/>
                            </div>
                            <div className="form-group">
                                <input onChange={ this.onPasswordChange } type="password" className="form-control" placeholder="Your Password *" required/>
                            </div>
                            <div className="form-group">
                                <input onClick={ this.onSubmitSignIn } type="submit" className="btnSubmit" value="Sign In"/>
                            </div>
                            <div className="form-group">
                                <p onClick={() => onRouteChange('register')} className="Register btn">Register</p>
                            </div>
                            <div className="form-group">
                                <p className="ForgetPwd btn">Forget Password?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;