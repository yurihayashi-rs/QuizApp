import React,{useState, useContext} from 'react'
import {Questions} from '../Helper/QuestionBank'
import { QuizContext } from '../Helper/Contexts'

const Quiz = () => {
    const { score, setScore, gameState, setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState(" ");

    const chooseOption = (option) => {
        setOptionChosen(option);
      };
    

    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        alert(score);
        setCurrQuestion(currQuestion + 1)

    }
    const finishQuiz = () =>{
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score +1);
        }
        setGameState("EndScreens");

    }


    return (
        <div className="Quiz">
            <div className="options">
           <h1>{Questions[currQuestion].prompt}</h1>
           
               <button onClick={() => chooseOption("optionA")}>
                   {Questions[currQuestion].optionA}{" "}
                   </button>
               <button onClick={() => chooseOption("optionB")}>
                   {Questions[currQuestion].optionB}{" "}
                   </button>
               <button onClick={() => chooseOption("optionC")}>
                   {Questions[currQuestion].optionC}{" "}
                   </button>
               <button onClick={() => chooseOption("optionD")}>
                   {Questions[currQuestion].optionD}{" "}
                   </button>
           

           {currQuestion == Questions.length -1 ? (
               <button onClick ={finishQuiz}>Finish Quiz</button>
           ):( 
                <button onClick={nextQuestion}>NEXT QUESTION</button>
           )}
           </div>



        </div>
    )
}

export default Quiz
