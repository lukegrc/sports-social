import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/ActionTypes';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
      <div>
        <h1>{ isSignup ? 'Sign up' : 'Sign in' }</h1>
        <form onSubmit={handleSubmit}>
            { isSignup && (
            <>
              <input name="firstName" label="First Name" handleChange={handleChange}/>
              <input name="lastName" label="Last Name" handleChange={handleChange}/>
            </>
            )}
            <input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          <button type="submit">
            { isSignup ? 'Sign Up' : 'Sign In' }
          </button>
          <GoogleLogin
            clientId="564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com"
            render={(renderProps) => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} >
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
              <button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </button>
        </form>
    </div>
  );
};

export default SignUp;