import React, { useState } from 'react';
import loginUser from '../model/loginModel';
import styles from './css/Login.module.scss';
import ErrorBox from '../components/common/ErrorBox';

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (loginUser(username, password)) {
      window.location.href = '/home';
    } else {
      setError('Username or password is incorrect');
    }
  };
  const handleCloseError = () => {
    setError('');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <ErrorBox message={error} onClose={handleCloseError} />}
      </div>
    </div>
  );
};

export default LoginPage;
