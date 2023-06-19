import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  function handleTimeRemaining() {
    if (timeRemaining > 1) {
      setTimeRemaining(timeRemaining - 1)
    } else {
      setTimeRemaining(10)
      onAnswered(false)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(handleTimeRemaining, 1000)

    return function() {
      clearTimeout(timeoutId)
    }
  })

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
