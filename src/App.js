import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import CategoryList from './components/CategoryList';
import CategoryChart from './components/CategoryChart';
import DifficultyChart from './components/DifficultyChart';
import { getCategoryData, getDifficultyData } from './utils';
import { generateMockData } from './mockData';

function App() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        // mock data for now
        setTimeout(() => {
            setQuestions(generateMockData());
            setLoading(false);
        }, 500);
    }, []);

    if(loading){
        return(
            <div className="App">
                <h1>Trivia Questions Visualizer</h1>
                <p>Loading questions...</p>
            </div>
        )
    }

    const filteredQuestions = selectedCategory
        ? questions.filter(q => q.category === selectedCategory)
        : questions;

    const categoryData = getCategoryData(filteredQuestions);
    const difficultyData = getDifficultyData(filteredQuestions);

  return (
    <div className="App">
        <h1>Trivia Questions Visualizer</h1>

            <CategoryList
                questions={questions}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
            />

            <div className="charts-container">
                <CategoryChart data={categoryData} />
                <DifficultyChart data={difficultyData} />
            </div>

            <p className="question-count">Showing {filteredQuestions.length} questions</p>
    </div>
  );
}

export default App;