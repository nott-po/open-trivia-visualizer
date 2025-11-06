import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function QuestionsTable({ questions, selectedCategory }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showCount, setShowCount] = useState(5);

    if (!questions || questions.length === 0) return null;

    const displayQuestions = questions.slice(0, showCount);
    const hasMore = questions.length > showCount;

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'easy': return '#7ea87a';
            case 'medium': return '#f4a261';
            case 'hard': return '#e76f51';
            default: return '#718096';
        }
    };

    const decodeHtml = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    const getAllAnswers = (question) => {
        const incorrect = question.incorrect_answers || [];
        const correct = question.correct_answer;
        const allAnswers = [...incorrect, correct];

        // stable shuffle
        const seed = question.question.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

        return allAnswers
            .map((answer, i) => ({
                answer,
                sort: Math.sin(seed + i)
            }))
            .sort((a, b) => a.sort - b.sort)
            .map(item => item.answer);
    };

    return (
        <div className="questions-section">
            <div className="questions-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div>
                    <h2>Sample Questions</h2>
                    <p className="questions-subtitle">
                        {selectedCategory
                            ? `Showing ${questions.length} questions from ${decodeHtml(selectedCategory)}`
                            : `Showing ${questions.length} questions from all categories`
                        }
                    </p>
                </div>
                <button className="expand-btn">
                    {isExpanded ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </button>
            </div>

            {isExpanded && (
                <div className="questions-content">
                    <div className="questions-table">
                        {displayQuestions.map((q, index) => {
                            const allAnswers = getAllAnswers(q);

                            return (
                                <div key={index} className="question-card">
                                    <div className="question-header-row">
                                        <span className="question-number">#{index + 1}</span>
                                        <span
                                            className="difficulty-badge"
                                            style={{ backgroundColor: getDifficultyColor(q.difficulty) }}
                                        >
                      {q.difficulty}
                    </span>
                                        <span className="category-badge">{decodeHtml(q.category)}</span>
                                    </div>
                                    <div className="question-text">
                                        {decodeHtml(q.question)}
                                    </div>

                                    <div className="answer-options">
                                        <strong>Answer Options:</strong>
                                        <div className="options-grid">
                                            {allAnswers.map((answer, i) => (
                                                <div
                                                    key={i}
                                                    className={`answer-option ${answer === q.correct_answer ? 'correct' : ''}`}
                                                >
                                                    {answer === q.correct_answer && <span className="correct-icon">✓</span>}
                                                    {decodeHtml(answer)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {hasMore && (
                        <div className="load-more-container">
                            <button
                                className="load-more-btn"
                                onClick={() => setShowCount(prev => prev + 5)}
                            >
                                Load More ({questions.length - showCount} remaining)
                            </button>
                        </div>
                    )}

                    {showCount >= questions.length && questions.length > 5 && (
                        <div className="load-more-container">
                            <button
                                className="load-more-btn secondary"
                                onClick={() => setShowCount(5)}
                            >
                                Show Less
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default QuestionsTable;