import React, {useContext} from 'react'
import { QuizContext } from '../Helper/Contexts'
import "../App.css"
import { Questions } from '../Helper/QuestionBank'

const EndScreens = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const restartQuiz = ()=> {
        setScore(0);
        setGameState("menu");
    }
    return (
        <div className="EndScreens">
            {""}
            <h1>Quiz Finished</h1>
            <h3> {score} / {Questions.length} </h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreens
