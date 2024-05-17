import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import GameOver from "./components/GameOver";
import Question from "./components/Question";
import Welcome from "./components/Welcome";

import PickCategory from "./components/PickCategory";
import Logo_mapa from "./img/logo-mapa.png";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <img className="logo" src={Logo_mapa} alt="" width={200} />
      <h1>Robótica Educacional</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
