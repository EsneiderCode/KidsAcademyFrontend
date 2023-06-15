import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Home.module.css';
import getUserInfo from '../../Functions/User';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');

    if (!token || !id) {
      navigate('/');
    } else {
      getUserInfo(id, setUser);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleStartModule = () => {
    // To do
    // ...
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
  };

  const handleEditInformation = () => {
    // navigate('/edit');
  };

  return (
    <div className={styles.homepage}>
      <h1>Добро пожаловать на домашнюю страницу</h1>
      {user ? (
        <div className={styles["user-info"]}>
          <img src={user.avatar} alt="Avatar" />
          <h2>ФИО: {user.username}</h2>
          <h2>Общая оценка: {user.rating}</h2>
          <h2>Учебное заведение: {user.institution}</h2>
          <h2>Дата рождения: {user.birthdate}</h2>
        </div>
      ) : (
        <div>Загрузка информации о пользователе...</div>
      )}
      <div className={styles.buttonsContainer}>
        <Link to='/module-1' onClick={handleStartModule} className={styles.btnPrimary}>Начать модуль 1</Link>
        <button onClick={handleEditInformation} className={styles.btnPrimary}>Редактировать информацию</button>
        <button onClick={handleSignOut} className={styles.btnSecundary}>Выйти</button>
      </div>
    </div>
  );
};

export default Home;
