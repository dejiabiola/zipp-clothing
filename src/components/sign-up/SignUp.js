import React, { Component } from 'react'
import './sign-up.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async (event) => {
    // Async function that will register the user details in the firebase db
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('passwords don\'t match')
      return;
    }

    try {
      // use the firebase auth create object to create a new user object and destructure it from its parent
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      // pass the user object to create user profile function to store it in the database
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }


  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput 
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput 
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>
            Sign up
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp