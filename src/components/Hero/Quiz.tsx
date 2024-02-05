import React, { useState } from 'react'

const Quiz = () => {

  const [currentQuestion, setcurrentQuestion] = useState(0);
  // we will toggle the show score
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  // lets add some questions

  const allQuestions = [
    {
      text: 'What is the primary goal of the coin changing problem?',
      options: [
        { answerText: 'Minimize', isCorrect: true },
        { answerText: 'Optimize', isCorrect: false },
        { answerText: 'Maximize', isCorrect: false },
      ],
    },
    {
      text: 'In dynamic programming, what is used to store intermediate results?',
      options: [
        { answerText: 'Array', isCorrect: false },
        { answerText: 'Table', isCorrect: true },
        { answerText: 'Variable', isCorrect: false },
      ],
    },
    {
      text: 'What is the name of the approach that always selects the largest coin available at each step?',
      options: [
        { answerText: 'Random', isCorrect: false },
        { answerText: 'Sequential', isCorrect: false },
        { answerText: 'Greedy', isCorrect: true },
      ],
    },
  ]

  const handleAnswerOptions = (isCorrect) => {
    if (isCorrect) {
      setscore(score + 1);
    }

    const handleNextQuestion = currentQuestion + 1;
    if (handleNextQuestion < allQuestions.length) {
      setcurrentQuestion(handleNextQuestion);
    } else {
      setshowScore(true);
    }
  }

  return (
    
    <div className='flex w-full h-screen justify-center items-center bg-zinc-800' id ="quiz">
        
      <div className='bg-slate-100 p-12 rounded-lg shadow-2xl w-full max-w-xl text-center '>
        {
          showScore ? (
            <>
              <div className='text-slate-700 text-xl font-semibold'>
                You scored {score} out of {allQuestions.length}!
              </div>
              <br></br>
              <button className='m-2 h-10 w-24 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ' onClick={()=> {window.location.reload()}}>Quiz again!</button>
            </>
          ) : (
            <>
              <div className='text-slate-700 text- xl font-bold '>
                <div className='m-10'>
                  <span>Question {currentQuestion + 1}</span>/{allQuestions.length}
                </div>
                <div className='m-10 text-3xl'>
                  {allQuestions[currentQuestion].text}
                </div>

                <div className='w-full'>
                  {
                    allQuestions[currentQuestion].options.map((options) => (
                      <button className='m-2 h-10 w-24 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out ' onClick={()=>handleAnswerOptions(options.isCorrect)}>{options.answerText}</button>
                    ))
                  }

                </div>

              </div>
            </>
          )
        }


      </div>
    </div>
  )
}

export default Quiz