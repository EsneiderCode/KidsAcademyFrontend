import React from 'react';
import './emailconfirmation.css';

const EmailConfirmation = () => {
    return (
      <div className="container">
        <h2>Подтверждение Email</h2>
        <p>На ваш зарегистрированный адрес электронной почты было отправлено письмо.</p>
        <p>Пожалуйста, следуйте инструкциям в письме, чтобы подтвердить свою учетную запись.</p>
        <button className="btn-primary">Отправить письмо повторно</button>
      </div>
    );
};  

export default EmailConfirmation;