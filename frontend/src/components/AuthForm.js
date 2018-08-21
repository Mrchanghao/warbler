import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            profileImageUrl: '',
            password: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : 'signin';
        this.props.onAuth(authType, this.state).then(() => {
            this.props.history.push('/');
        })
        .catch(() => {
            return; 
        })
    }

    render() {
        const {email, username, profileImageUrl, password} = this.state;
        const {heading, buttonText, signUp, errors, history, removeError} = this.props;
        history.listen(() => {
            removeError();
        })
        return (
            <div>
                <div className='row justify-content-md-center text-center'>
                    <div className='col-md-6'>
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && <div className='alert alert-danger'>
                                {errors.message}
                            </div>}
                            <label htmlFor='email'>Email:</label>
                            <input className='form-control' type='text' 
                            name='email'
                            id='email' value={email}
                            onChange={this.handleChange}
                            />
                            <label htmlFor='password'>Password:</label>
                            <input className='form-control' type='password' 
                            name='password'
                            id='password'
                            onChange={this.handleChange}
                            />
                            {signUp && (
                            <div>
                                <label htmlFor='username'>Username:</label>
                                <input className='form-control' type='text' 
                                name='username'
                                id='username' value={username}
                                onChange={this.handleChange}
                                />
                                <label htmlFor='image-url'>Image URL:</label>
                                <input className='form-control' type='text' 
                                name='profileImageUrl'
                                id='image-url'
                                value={profileImageUrl}
                                onChange={this.handleChange}
                                />
                            </div>)}
                            <button type='submit' className='btn btn-primary btn-block btn-lg'>
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;