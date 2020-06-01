import React, { Component } from 'react';

import './sign-in.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import PropTypes from 'prop-types'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.emailSignInStart({email, password})
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" 
            name='email' 
            value={this.state.email} 
            required 
            handleChange={this.handleChange}
            label='Email'
          />

          <FormInput 
            type="password" 
            name='password' 
            value={this.state.password} 
            required 
            handleChange={this.handleChange}
            label='Password'  
          />
          <div className="buttons">
            <CustomButton type="submit">
              Sign in
            </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  emailSignInStart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword))
})

export default connect(null, mapDispatchToProps)(SignIn);