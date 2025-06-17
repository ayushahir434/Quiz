import QUESTIONS from '../components/questions.js';

export default function Answers({ userAnswers }) {
  const totalQuestions = QUESTIONS.length;
  const correctCount = userAnswers.reduce((count, answer, index) => {
    return QUESTIONS[index].correctAnswer === answer ? count + 1 : count;
  }, 0);
  const wrongCount = totalQuestions - correctCount;

  return (
    <>
      <div id="summary-result">
        <h2>Quiz Summary</h2>
        <p>Total Questions: {totalQuestions}</p>
        <p>Correct Answers: {correctCount}</p>
        <p>Wrong Answers: {wrongCount}</p>
        <p>Result: {correctCount} / {totalQuestions}</p>
      </div>

      <ul id="summary-answers">
        {userAnswers.map((answer, index) => {
          const question = QUESTIONS[index];
          const isCorrect = question.correctAnswer === answer;

          return (
            <li key={index} className={isCorrect ? 'correct' : 'wrong'}>
              <h3>Q{index + 1}</h3>
              <p>Your answer: <strong>{answer ?? 'No Answer'}</strong></p>
              <p>Correct answer: <strong>{question.correctAnswer}</strong></p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
