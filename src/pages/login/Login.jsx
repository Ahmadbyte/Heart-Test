import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result.user);
        alert("Login Succesfully! You will redirected to your Website...");
        // Redirect to Start page after successful login
        setTimeout(() => {
          navigate('/start');
        }, 3000); // 1 second delay
      })
      .catch((error) => {
        console.error('Error logging in with Google:', error);
        alert('Login failed. Please try again.');
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Sign in</h2>
        <button className="google-button" onClick={signInWithGoogle}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            alt="Google logo"
            className="google-logo"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
