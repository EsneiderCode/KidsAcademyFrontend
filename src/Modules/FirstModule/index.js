import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './firstmodule.css';
import ImageAndQuestionTest from "../../Components/Tests/ImageAndQuestionTest";
import QuestionsImageAndQuestionTest from './questions';
import ImageClickTest from "../../Components/Tests/ImageClickTest";
import axios from 'axios';

const FirstModule = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  //Props for ImageAndQuestionTest 
  const [testEnable, setTestEnable] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [imageAndQuestionTestScore, setImageAndQuestionTestScore] = useState(0);
  const [changeTest, setChangeTest] = useState(false);

  //Props for ImageClickTest
  const testTitle = 'Поиск несколькиз точек на картинке';
  const imageClickTestUrl =  require('./images/greatwolf.webp');
  const [imageClickTestScore, setImageClickTestScore] = useState(0);
  const correctClicks = [
    { x: 201, y: 144 }, 
    { x: 157, y: 146 },
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    setUser(JSON.parse(localStorage.getItem('user')));
    if (!token || !id || !user) {
      navigate('/');
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (changeTest === true){
    setTestEnable(testEnable + 1);
    setChangeTest(false);
  }

  const propsImageAndQuestionTest = {
    questions:QuestionsImageAndQuestionTest,
    currentQuestion,
    setCurrentQuestion,
    imageAndQuestionTestScore,
    setImageAndQuestionTestScore,
    setChangeTest
  }

  const propsImageClickTest = {
    title:testTitle,
    imageClickTestUrl,
    correctClicks,
    setChangeTest,
    setImageClickTestScore,
    imageClickTestScore
  }

  function calculateStudentRating(){
    const totalQuestions = QuestionsImageAndQuestionTest.length;
    const totalCorrectClicks = correctClicks.length;
    const total = (imageAndQuestionTestScore + imageClickTestScore) / (totalQuestions + totalCorrectClicks);
    const rating = total * 100;
    return rating;
  }

  const updateUserInfo = async () => {
    try {
      const data = {
        rating : calculateStudentRating()
      };
      const token =  localStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      const response = await axios.put(`http://localhost:1337/api/users/${user.id}`, data, {headers});
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

    switch (testEnable) {
      case 1:
        return <ImageAndQuestionTest {...propsImageAndQuestionTest} />;
      case 2:
        return < ImageClickTest {...propsImageClickTest} />;
      case 3:
          updateUserInfo();
          navigate('/studentscore');
          break;
      default:
        return <div>Opción no válida</div>;
    }

};

export default FirstModule;