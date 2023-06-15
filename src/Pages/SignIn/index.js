import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import styles from './SignIn.module.css'; // Corregir la importación del archivo CSS

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [successLogin, setSuccessLogin] = useState(false);
  const navigate = useNavigate();

  // Обработчик отправки формы
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      // Отправка запроса на сервер для поиска пользователя
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: email,
          password: password,
        }
      );

      // Сохранение токена пользователя в локальном хранилище
      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("id", response.data.user.id);

      // Перенаправление на главную страницу
      navigate('/home');
    } catch (error) {
      // Обработка ошибки
      setErrorMessage("Неправильный email или пароль");
    }
  };

  return (
    <div className={styles.SignIn}> 
      <h1>Вход</h1>
      <form className={styles.login__form} onSubmit={handleSubmit}> 
        <div className={styles["separator-label-input__vertical"]}> 
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
        </div>
        <div className={styles["separator-label-input__vertical"]}> 
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
        <Link to='/sign-up' className={styles.btnSecundary}>Зарегистрироваться</Link> 
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default SignIn;
