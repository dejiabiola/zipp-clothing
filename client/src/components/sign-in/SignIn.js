import React, { useState } from 'react';

import './sign-in.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import PropTypes from 'prop-types'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';





const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: ''})
  const { email, password } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()
    emailSignInStart({email, password})
  }
  
  const handleChange = (event) => {
    const { value, name } = event.target
    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" 
          name='email' 
          value={email} 
          required 
          handleChange={handleChange}
          label='Email'
        />

        <FormInput 
          type="password" 
          name='password' 
          value={password} 
          required 
          handleChange={handleChange}
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

SignIn.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  emailSignInStart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword))
})

export default connect(null, mapDispatchToProps)(SignIn);