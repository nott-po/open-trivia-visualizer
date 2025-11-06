import { FiBarChart2 } from 'react-icons/fi';
import { HiTrendingUp } from 'react-icons/hi';
import { MdSpeed } from 'react-icons/md';

function StatsCards({questions}){
    if (!questions || questions.length === 0) return null;

    const totalQuestions = questions.length;

    const categoryCounts = {};
    questions.forEach(q => {
        categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;
    })

    const mostPopular = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0];

    const difficultyCounts = { easy: 0, medium: 0, hard: 0 };
    questions.forEach(q => {
        difficultyCounts[q.difficulty]++;
    });

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
                <div className="stat-value">{mostPopular[1]}</div>
                <div className="stat-label">
                    Most Popular<br/>
                    <span className="stat-sublabel">{mostPopular[0]}</span>
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