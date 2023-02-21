import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import SmButton from "./option";
import QuizResult from "./QuizResult";
function Quiz() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore] = useState(0);
  const [percentage,setPercentage] = useState(0);
  const [clickedOption,setClickedOption]=useState(0);
  const [result,setResult] = useState(0);
  const [showResult,setShowResult]=useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    let rs = result
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setPercentage(0);
    setResult((rs == 30)?"you are pass":"you are faild")

  };
  return (
    <div>
      <p className="heading-txt">Quiz APP</p>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} percentage={percentage} totalScore={QuizData.length} result={result} tryAgain={resetAll}/>
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <SmButton
                    clickedOption={clickedOption === i + 1 ? "checked" : null}
                    option={option}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  />
                );
              })}
            </div>
            
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
