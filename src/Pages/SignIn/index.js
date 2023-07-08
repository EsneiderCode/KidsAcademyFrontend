import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import styles from './SignIn.module.css';

function SignIn() {

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');

    if (token || id) {
      navigate('/home');
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: email,
          password: password,
        }
      );

      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("id", response.data.user.id);

      navigate('/home');
    } catch (error) {
      setErrorMessage("Неправильный email или пароль");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Вход</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.separatorLabelInputVertical}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className={styles.separatorLabelInputVertical}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.btnPrimary}>Войти</button>
        <Link to='/sign-up' className={styles.btnSecondary}>Зарегистрироваться</Link>
      </form>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}

export default SignIn;
