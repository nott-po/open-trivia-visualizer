import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=50').then(response => response.json()).then(data => {
            console.log('Fetched data:', data.results);
            setQuestions(data.results);
            setLoading(false);
        }).catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        })
    }, []);

    if(loading){
        return(
            <div className="App">
                <h1>Trivia Questions Visualizer</h1>
                <p>Loading questions...</p>
            </div>
        )
    }

  return (
    <div className="App">
        <h1>Trivia Questions Visualizer</h1>
        <p>Loaded  {questions.length} questions</p>
    </div>
  );
}

export default App;
