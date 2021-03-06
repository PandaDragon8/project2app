import './App.css';
import Header  from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = (category, difficulty) => {

    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then(resp => resp.json())
      .then(data => {
        setQuestions(data.results)
      })

  };


  return (
    <BrowserRouter>
  <div className="App" style={{backgroundImage: "url(./quizbackg.png"}}>
    <Header />
   
    <Switch>

    <Route path='/' exact>
      <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>


    </Route>

    <Route path='/quiz' exact>
      
      <Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>


    </Route>

    <Route path='/result' exact>
      <Result name={name} score={score}/>


    </Route>

    </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
