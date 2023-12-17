 import React, { useState   } from 'react';
import { Link, useParams ,useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './Login.css';

const Login = () => {
  // const history = useParams(); // Initialize useHistory
  const navigate = useNavigate();

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  
  const handleLogin = () => {
    if (!isValidEmail(email) || password.length < 8) {
      alert(
        'Please enter a valid email and ensure your password is at least 8 characters long.'
        );
        return;
      }else if(isValidEmail(email) && password.length >= 8){
        navigate('/students');
        
      }

    setLoggedIn(true);

    // Redirect to another page
    // navigate.push('/students'); // Replace '/dashboard' with the desired path
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <animated.div style={animationProps} className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <label>Email:</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>

          <p>
            Don't have an account? <Link to="/">Sign Up</Link>
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default Login;
