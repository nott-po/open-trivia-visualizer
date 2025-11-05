export const mockQuestions = [
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Music",
        "question": "Who is the lead singer of Coldplay?",
        "correct_answer": "Chris Martin"
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Science: Computers",
        "question": "What does CPU stand for?",
        "correct_answer": "Central Processing Unit"
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "History",
        "question": "When did World War II end?",
        "correct_answer": "1945"
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Sports",
        "question": "How many players in a football team?",
        "correct_answer": "11"
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Music",
        "question": "Who wrote 'Bohemian Rhapsody'?",
        "correct_answer": "Freddie Mercury"
    }
];

//  50 questions (repeating and varying)
export function generateMockData() {
    const categories = ["Science: Computers", "History", "Sports", "Entertainment: Music", "Geography", "Art", "Science: Mathematics"];
    const difficulties = ["easy", "medium", "hard"];
    const questions = [];

    for (let i = 0; i < 50; i++) {
        questions.push({
            type: "multiple",
            difficulty: difficulties[i % 3],
            category: categories[i % categories.length],
            question: `Sample question ${i + 1}?`,
            correct_answer: "Answer"
        });
    }

    return questions;
}