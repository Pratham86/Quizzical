import React,{ useState } from 'react';
import Confetti from "react-confetti";

export default function Question() {
  const questions = [
    {
        question: 'What is the capital of France?',
        options: [
            { optionText: 'New York', isCorrect: false },
            { optionText: 'London', isCorrect: false },
            { optionText: 'Paris', isCorrect: true },
            { optionText: 'Dublin', isCorrect: false }
        ]
    },
    {
        question: 'Who is CEO of Tesla?',
        options: [
            { optionText: 'Jeff Bezos', isCorrect: false },
            { optionText: 'Elon Musk', isCorrect: true },
            { optionText: 'Bill Gates', isCorrect: false },
            { optionText: 'Tony Stark', isCorrect: false }
        ]
    },
    {
        question: 'The iPhone was created by which company?',
        options: [
            { optionText: 'Apple', isCorrect: true },
            { optionText: 'Intel', isCorrect: false },
            { optionText: 'Amazon', isCorrect: false },
            { optionText: 'Microsoft', isCorrect: false }
        ]
    },
    {
        question: 'How many Harry Potter books are there?',
        options: [
            { optionText: '1', isCorrect: false },
            { optionText: '4', isCorrect: false },
            { optionText: '6', isCorrect: false },
            { optionText: '7', isCorrect: true }
        ]
    }

  ]
  
  const [currQues , setCurrQues] = useState(0);
  const [showscore ,setShowScore] = useState(false);
  const [score , setScore] = useState(0);

  const handleOptionClick = (isCorrect) => {
    if(isCorrect){
      setScore(score => score+1);
    }
    
    
    const nextQues = currQues+1;
    if(nextQues < questions
    .length){
      setCurrQues(nextQues);
    }
    else{
      setShowScore(true);
    }
  };
  
  return (
    <div className='ques'>
      {score === questions.length && (<Confetti />)}
      {showscore ? (<div className = 'Score-section'> You Scored {score}
      </div>) :
       ( 

       <>
        <div className = 'Question-section'>

          <p className='Question'>{questions
      [currQues].question}</p>

          <div className = 'Options'>{questions
      [currQues].options.map((option) =>
              (<button onClick= {() => handleOptionClick(option.isCorrect)}> {option.optionText} </button>)
          )} 
          </div> 


        </div>
        </>)}

    </div>
  )
}

