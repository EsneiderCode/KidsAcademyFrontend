import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageAndQuestionTest from "../../Components/Tests/ImageAndQuestionTest";
import QuestionsImageAndQuestionTest from './questions';
import ImageClickTest from "../../Components/Tests/ImageClickTest";
import DragAndDropGame from "../../Components/Tests/DragAndDropTest";
import FillingGapsTest from '../../Components/Tests/FillingGapsTest';
import CardsDragAndDropTest from '../../Components/Tests/CardsDragAndDropTest';
import axios from 'axios';
import Loading from '../../Components/Loading';

const FirstModule = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Props for ImageAndQuestionTest
  const [testEnable, setTestEnable] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [imageAndQuestionTestScore, setImageAndQuestionTestScore] = useState(0);
  const [changeTest, setChangeTest] = useState(false);

  // Props for ImageClickTest
  const testTitle = 'Поиск нескольких точек на картинке';
  const imageClickTestUrl = require('./images/greatwolf.webp');
  const [imageClickTestScore, setImageClickTestScore] = useState(0);
  const correctClicks = [
    { x: 201, y: 162 },
    { x: 155, y: 165 },
  ];

  // Props for drag and drop test;
  const imageDragAndDropUrl = require('./images/animals.webp');
  const [wordsListDragAndDrop, setWordsListDragAndDrop] = useState(['Лощадь', 'Колибри', 'Волк', 'Собака', 'Кот', 'Баран']);
  const correctWordsDragAndDrop = ['Баран', 'Волк'];
  const [dragAndDropScore, setDragAndDropScore] = useState(0);
  const sentence =
    `Заплелись густые травы, Закудрявились луга, Да и сам я весь кудрявый,
  Даже завитком рога. Как его зовут? ______  .
  На овчарку он похож, Что ни зуб - то острый нож!
  Он бежит, оскалив пасть, На овцу готов напасть. Его зовут ______  `;

  // Props for filling gaps test
  const fillingGapsTitle = "Guess the Words!";
  const fillingGapsPicture = require('./images/lake-don.webp');
  const fillingGapsWords = ['boat', 'houses'];
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [fillingGapsScore, setFillingGapsScore] = useState(Array(fillingGapsWords.length).fill(''));
  const fillingGapsSentence = 
  `There is a __ over the river, and a __ in on the street.`;

  //Props for CardsDragAndDropTest
  const [CardsDragAndDropScore, setCardsDragAndDropScore] = useState(0);
  const foxUrl = require('./images/fox.webp');
  const wolfUrl = require('./images/wolf.webp');
  const animalsCardsDAD = [
    {
      name: "Волк",
      url: wolfUrl
    },
    {
      name: "Лиса",
      url: foxUrl
    }
  ]


  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    setUser(JSON.parse(localStorage.getItem('user')));
    if (!token || !id || !user) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (changeTest === true) {
    setLoading(true);
    setTestEnable(testEnable + 1);
    setChangeTest(false);
  }

  const propsImageAndQuestionTest = {
    questions: QuestionsImageAndQuestionTest,
    currentQuestion,
    setCurrentQuestion,
    imageAndQuestionTestScore,
    setImageAndQuestionTestScore,
    setChangeTest
  }

  const propsImageClickTest = {
    title: testTitle,
    imageClickTestUrl,
    correctClicks,
    setChangeTest,
    setImageClickTestScore,
    imageClickTestScore
  }

  const propsDragAndDropTest = {
    imageDragAndDropUrl,
    correctWordsDragAndDrop,
    setDragAndDropScore,
    wordsListDragAndDrop,
    setWordsListDragAndDrop,
    sentence,
    setChangeTest,
  }

  const propsFillingGapsTest = {
    setChangeTest,
    fillingGapsTitle,
    fillingGapsSentence,
    fillingGapsWords,
    fillingGapsPicture,
    correctGuesses,
    setCorrectGuesses,
    fillingGapsScore,
    setFillingGapsScore
  }

  const propsCardsDragAndDropTest = {
    setChangeTest,
    animalsCardsDAD,
    CardsDragAndDropScore,
    setCardsDragAndDropScore
  }

  function calculateStudentRating() {
    const totalQuestions = QuestionsImageAndQuestionTest.length;
    const totalCorrectClicks = correctClicks.length;
    const totalWordsCorrectsDragAndDrop = correctWordsDragAndDrop.length;
    const totalFillingTheGapsWordsCorrect = fillingGapsWords.length;
    const fillingGapsFinalScore = correctGuesses.length;
    const totalCardsDragAndDrop = animalsCardsDAD.length;

    const total = (imageAndQuestionTestScore + imageClickTestScore + dragAndDropScore + fillingGapsFinalScore + CardsDragAndDropScore) /
      (totalQuestions + totalCorrectClicks + totalWordsCorrectsDragAndDrop + totalFillingTheGapsWordsCorrect + totalCardsDragAndDrop);

    const rating = total * 100;
    return rating;
  }

  const updateUserInfo = async () => {
    try {
      const data = {
        rating: calculateStudentRating()
      };
      const token = localStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      await axios.put(`http://localhost:1337/api/users/${user.id}`, data, { headers });

    } catch (error) {
      console.error(error);
    }
  };

  if (loading === true) {
    return <Loading setLoading={setLoading}/>;
  }
  
  switch (testEnable) {
    case 1:
      return <ImageAndQuestionTest {...propsImageAndQuestionTest} />;
    case 2:
      return <ImageClickTest {...propsImageClickTest} />;
    case 3:
      return <DragAndDropGame {...propsDragAndDropTest} />;
    case 4:
      return <FillingGapsTest {...propsFillingGapsTest} />;
    case 5: 
      return <CardsDragAndDropTest {...propsCardsDragAndDropTest} />;
    case 6:
      updateUserInfo();
      setTimeout(() => {
        navigate('/studentscore');
      }, 500);
      break;
    default:
      return <div>Opción no válida</div>;
  }

};

export default FirstModule;
