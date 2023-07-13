import React from 'react';
import styles from './EmailConfirmation.module.css';

const EmailConfirmation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Подтверждение Email</h2>
      <p className={styles.text}>На ваш зарегистрированный адрес электронной почты было отправлено письмо.</p>
      <p className={styles.text}>Пожалуйста, следуйте инструкциям в письме, чтобы подтвердить свою учетную запись.</p>
      <button className={styles.btnPrimary}>Отправить письмо повторно</button>
    </div>
  );
};

export default EmailConfirmation;
