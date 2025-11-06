import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import CategoryList from './components/CategoryList';
import CategoryChart from './components/CategoryChart';
import DifficultyChart from './components/DifficultyChart';
import StatsCards from './components/StatsCards';
import LoadingSkeleton from './components/LoadingSkeleton';
import { getCategoryData, getDifficultyData } from './utils';
import cachedData from './cachedData.json';

function App() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                // live API first
                const tokenResponse = await fetch('https://opentdb.com/api_token.php?command=request');
                const tokenData = await tokenResponse.json();

                if (tokenData.token) {
                    const response = await fetch(`https://opentdb.com/api.php?amount=50&token=${tokenData.token}`);
                    const data = await response.json();

                    if (data.response_code === 0 && data.results) {
                        setQuestions(data.results);
                        setDataSource('live');
                        console.log('Using live API data');
                    } else {
                        throw new Error('API returned error code');
                    }
                }
            } catch (err) {
                // cached real data
                console.log('API unavailable, using cached data');
                setQuestions(cachedData);
                setDataSource('cached');
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if(loading){
        return <LoadingSkeleton />;
    }

    const filteredQuestions = selectedCategory
        ? questions.filter(q => q.category === selectedCategory)
        : questions;

    const categoryData = getCategoryData(filteredQuestions);
    const difficultyData = getDifficultyData(filteredQuestions);

  return (
    <div className="App">
        <h1>Trivia Questions Visualizer</h1>

            {dataSource === 'cached' && (
                <div className="info-banner">
                    ℹ️ Using cached data due to API rate limits. The app normally fetches live data from Open Trivia DB.
                </div>
            )}

            <StatsCards questions={questions} />

            <CategoryList
                questions={questions}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
            />

            <div className="charts-container">
                <CategoryChart data={categoryData} />
                <DifficultyChart data={difficultyData} />
            </div>

    </div>
  );
}

export default App;