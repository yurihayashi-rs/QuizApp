import './App.css';
import React, {useState} from 'react'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreens from './components/EndScreens';
import { QuizContext } from './Helper/Contexts'

function App() {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0)
   //とりあえずここに作っといて、下のプロバイダで上の２つを全コンポーネントがアクセス可能な状態をつくる


  return (
    <div className="App">
      <h1>Quiz App</h1>   
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {gameState === 'menu' && <MainMenu />}
      {gameState === 'Quiz' && <Quiz />}
      {gameState === 'EndScreens' && <EndScreens />}
      </QuizContext.Provider>  
    </div>
    //providerの中にいる３つのコンポーネントはvalueにアクセス可能
  );
}

export default App;