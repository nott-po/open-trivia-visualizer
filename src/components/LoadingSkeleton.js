import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingSkeleton() {
    return (
        <div className="App">
            <h1>Trivia Questions Visualizer</h1>

            // STATS CARDS
            <div className="stats-grid">
                {[1, 2, 3].map(i => (
                    <div key={i} className="stat-card">
                        <Skeleton circle height={60} width={60} />
                        <Skeleton height={40} width={80} style={{ marginTop: '1rem' }} />
                        <Skeleton height={16} width={120} style={{ marginTop: '0.5rem' }} />
                    </div>
                ))}
            </div>

            // CATEGORIES LIST
            <div className="category-list">
                <div className="category-header">
                    <Skeleton height={24} width={150} />
                    <div className="category-controls">
                        <Skeleton height={48} width={400} borderRadius={12} />
                        <Skeleton height={48} width={180} borderRadius={12} />
                    </div>
                </div>
                <div className="skeleton-buttons">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <Skeleton key={i} height={48} width={180} borderRadius={12} />
                    ))}
                </div>
            </div>

            // CHARTS
            <div className="charts-container">
                {[1, 2].map(i => (
                    <div key={i} className="chart-container">
                        <Skeleton height={24} width={200} style={{ marginBottom: '1.5rem' }} />
                        <Skeleton height={350} borderRadius={12} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LoadingSkeleton;