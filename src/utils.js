export function getCategoryData(questions) {
    const categoryCounts = {};

    questions.forEach(q => {
        categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;
    });

    return Object.entries(categoryCounts).map(([name, count]) => ({
        name,
        count
    }));
}

export function getDifficultyData(questions) {
    const difficultyCounts = { easy: 0, medium: 0, hard: 0 };

    questions.forEach(q => {
        difficultyCounts[q.difficulty]++;
    });


    return Object.entries(difficultyCounts).map(([name, count]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        count
    }));
}

export function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

export const DIFFICULTY_COLORS = {
    'easy': '#7ea87a',
    'medium': '#f4a261',
    'hard': '#e76f51',
    // Capital version for charts
    'Easy': '#7ea87a',
    'Medium': '#f4a261',
    'Hard': '#e76f51'
};

export function getDifficultyColor(difficulty) {
    return DIFFICULTY_COLORS[difficulty] || '#718096';
}