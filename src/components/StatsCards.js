import { FiBarChart2 } from 'react-icons/fi';
import { HiTrendingUp } from 'react-icons/hi';
import { MdSpeed } from 'react-icons/md';
import { getCategoryData, getDifficultyData, decodeHtml  } from '../utils';

function StatsCards({questions}){
    if (!questions || questions.length === 0) return null;

    const totalQuestions = questions.length;

    const categoryData = getCategoryData(questions);
    const mostPopular = categoryData.sort((a, b) => b.count - a.count)[0];

    const difficultyData = getDifficultyData(questions);
    const difficultyCounts = {
        easy: difficultyData.find(d => d.name === 'Easy')?.count || 0,
        medium: difficultyData.find(d => d.name === 'Medium')?.count || 0,
        hard: difficultyData.find(d => d.name === 'Hard')?.count || 0
    };

    return(
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-icon">
                    <FiBarChart2 />
                </div>
                <div className="stat-value">{totalQuestions}</div>
                <div className="stat-label">Total Questions</div>
            </div>

            <div className="stat-card">
                <div className="stat-icon">
                    <HiTrendingUp />
                </div>
                <div className="stat-value">{mostPopular.count}</div>
                <div className="stat-label">
                    Most Popular<br/>
                    <span className="stat-sublabel">{decodeHtml(mostPopular.name)}</span>
                </div>
            </div>

            <div className="stat-card difficulty-card">
                <div className="stat-icon">
                    <MdSpeed />
                </div>
                <div className="difficulty-breakdown">
                    <div className="difficulty-item">
                        <span className="difficulty-dot easy"></span>
                        <span>Easy: {difficultyCounts.easy}</span>
                    </div>
                    <div className="difficulty-item">
                        <span className="difficulty-dot medium"></span>
                        <span>Medium: {difficultyCounts.medium}</span>
                    </div>
                    <div className="difficulty-item">
                        <span className="difficulty-dot hard"></span>
                        <span>Hard: {difficultyCounts.hard}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsCards;