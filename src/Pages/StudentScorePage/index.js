import React, {useEffect} from 'react';
import styles from './puntuation.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import getUserInfo from '../../Functions/User';

const StudentScorePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    getUserInfo(id, setUser);
    if (!token || !id || !user) {
      navigate('/');
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
      <><header>
          <h1>Баллы Студента</h1>
          <button onClick={handleSignOut}>Выйти</button>
        </header><main>
            <div className={styles.score}>
              <h2>Общий балл:</h2>
              <p>{user.rating}</p> {/* Здесь вы бы отобразили реальный общий балл студента */}
            </div>
            {/* Другие разделы или компоненты, связанные с баллами студента */}
          </main><footer>
            <Link to='/home' className="btn-secundary">Перейти на главную</Link>
          </footer></> ) :(
          <div>Загрузка информации о пользователе...</div>
      )}
    </div>
  );
};

export default StudentScorePage;
