import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
    Your Score:{props.score}<br/>
        Your Percentage:{props.percentage}<br/>
        Total Score:{props.totalScore}<br/>
        result:{props.result}
        
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult;