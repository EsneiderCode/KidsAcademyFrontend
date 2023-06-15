import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './StudentScorePage.module.css';
import getUserInfo from '../../Functions/User';

const StudentScorePage = () => {
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

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
  };

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <header>
            <h1>Баллы Студента</h1>
            <button className={styles.btnPrimary} onClick={handleSignOut}>Выйти</button>
          </header>
          <main>
            <div className={styles.score}>
              <h2>Общий балл:</h2>
              <p>{user.rating}</p> 
            </div>
          </main>
          <footer>
            <Link to='/home' className={styles["btnSecundary"]}>Перейти на главную</Link>
          </footer>
        </>
      ) : (
        <div>Загрузка информации о пользователе...</div>
      )}
    </div>
  );
};

export default StudentScorePage;