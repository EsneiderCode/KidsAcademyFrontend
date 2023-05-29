import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
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
    <div className="homepage">
      <h1>Добро пожаловать на домашнюю страницу</h1>
      {user ? (
        <div className="user-info">
          <img src={user.avatar} alt="Avatar" />
          <h2>ФИО: {user.username}</h2>
          <h2>Общая оценка: {user.rating}</h2>
          <h2>Учебное заведение: {user.institution}</h2>
          <h2>Дата рождения: {user.birthdate}</h2>
        </div>
      ) : (
        <div>Загрузка информации о пользователе...</div>
      )}
      <div className="buttons">
        <button onClick={handleStartModule}>Начать модуль</button>
        <button onClick={handleSignOut}>Выйти</button>
        <button onClick={handleEditInformation}>Редактировать информацию</button>
      </div>
    </div>
  );
};

export default Home;