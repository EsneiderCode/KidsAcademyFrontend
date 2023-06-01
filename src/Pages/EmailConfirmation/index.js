import React from 'react';
import styles from './EmailConfirmation.module.css';

const EmailConfirmation = () => {
  return (
    <div className={styles.container}>
      <h2>Подтверждение Email</h2>
      <p>На ваш зарегистрированный адрес электронной почты было отправлено письмо.</p>
      <p>Пожалуйста, следуйте инструкциям в письме, чтобы подтвердить свою учетную запись.</p>
      <button className={styles["btn-primary"]}>Отправить письмо повторно</button>
    </div>
  );
};  

export default EmailConfirmation;
