//Importing all pictures url for ImageAndQuestionTest
const Zebra =  require('../images/zebra.webp');
const Bird =  require('../images/bird.webp');

const QuestionsImageAndQuestionTest = [
  {
    question: "Какое животное имеет черно-белую полосатую шкуру?",
    options: ["Зебра", "Лев", "Слон"],
    answer: "Зебра",
    picture: Zebra
  },
  {
    question: "Какое животное летает и мяукает?",
    options: ["Собака", "Кошка", "Птица"],
    answer: "Птица",
    picture: Bird
  },
  // Добавьте больше вопросов здесь...
];

export default QuestionsImageAndQuestionTest;