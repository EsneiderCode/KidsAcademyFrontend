import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import styles from './SignUp.module.css';

const avatar1 = require("./avatars/avatar-1.webp");
const avatar2 = require("./avatars/avatar-2.webp");
const avatar3 = require("./avatars/avatar-3.webp");
const avatar4 = require("./avatars/avatar-4.webp");

const SignUp = () => {
  const [avatar, setAvatar] = useState(avatar1);
  const [birthdate, setBirthdate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [institution, setInstitution] = useState('');
  const [successRegister, setSuccessRegister] = useState(false);
  const navigate = useNavigate();
  
  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleInstitutionChange = (event) => {
    setInstitution(event.target.value);
  };

  if (successRegister){
    navigate('/');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "" || confirmPassword === "" || name === "" || birthdate === "" || institution === "") {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    axios
      .post(`https://stepi-backend.onrender.com/api/auth/local/register`, {
          username: name,
          email: email,
          password: password,
          birthdate: birthdate,
          avatar: avatar || avatar1,
          institution: institution
      })
      .then((response) => {
        alert("Зарегистрирован!");
        setSuccessRegister(true);
      })
      .catch((error) => {
        alert("Что-то пошло не так..");
        console.log(error);
      });
  };

  return (
    <div className={styles["container-signup"]}>
      <h2>Форма регистрации</h2>
      <form onSubmit={handleSubmit} className={styles.formSignUp}>
        <div className={styles["avatar-preview"]}>
          {avatar && <img src={avatar} alt="Аватар" />}
        </div>
        
        <div className={styles["separator-label-input"]}>
          <label>Выберите аватар:</label>
          <select value={avatar} onChange={handleAvatarChange}>
            <option value="" disabled hidden>Выберите аватар</option>
            <option value={avatar1}>Еж</option>
            <option value={avatar2}>Бегемот</option>
            <option value={avatar3}>Лиса</option>
            <option value={avatar4}>Кролик</option>
          </select>
        </div>
        <div className={styles["separator-label-input"]}>
          <label>Имя:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className={styles["separator-label-input"]}>
          <label>Электронная почта:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className={styles["separator-label-input"]}>
          <label>Пароль:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className={styles["separator-label-input"]}>
          <label>Подтверждение пароля:</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <div className={styles["separator-label-input"]}>
          <label>Дата рождения:</label>
          <input type="date" value={birthdate} onChange={handleBirthdateChange} />
        </div>
        <div className={styles["separator-label-input"]}>
          <label>Учебное заведение:</label>
          <input type="text" value={institution} onChange={handleInstitutionChange} />
        </div>
        <button type="submit" className={styles.btnPrimary}>Зарегистрироваться</button>
        <Link to='/sign-in' className={styles.btnSecundary}>Уже есть аккаунт?</Link>
      </form>
    </div>
  );
};

export default SignUp;