import axios from "axios";

const getUserInfo = async (id, setUser) => {
    try {
      const response = await axios.get(`http://stepi-backend.onrender.com/api/users/${id}`);
      if (response.status === 200) {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        console.log('Ошибка при получении информации о пользователе');
      }
    } catch (error) {
        console.log('Сетевая ошибка:', error);
    }
  };

export default getUserInfo;