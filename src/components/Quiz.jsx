import { useState } from "react";
import QUESTIONS from '../components/questions.js';
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx"; // import this
import quizCompleteImage from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectAnswer];
    });
  }

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
        <Answers userAnswers={userAnswers} />
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
