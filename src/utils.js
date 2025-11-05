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