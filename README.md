# Trivia Questions Visualizer

A React-based web application that fetches trivia questions from the Open Trivia Database API and visualizes them through interactive charts and data displays. 

## Features

### Data Fetching and Management
- Fetches **50 trivia questions** from the Open Trivia DB API using session tokens to prevent duplicate questions
- Automatic fallback to cached data when **API rate limits are reached**
- **Cached dataset includes 50 real questions** covering multiple categories and difficulty levels
- Visual indicator banner when using cached data

### Interactive Category Management
- Complete list of all question categories with question counts
- Real-time category **search** functionality
- Two **sorting** options: alphabetical (A-Z) or by question count
- Click any category to filter all visualizations and questions
- Active category highlighting with visual feedback
- Clear search button for easy reset
- "All Categories" option to view complete dataset

### Data Visualizations
- **Bar Chart**: Distribution of questions across categories with rotated labels for readability
- **Pie Chart**: Difficulty distribution with percentage labels
- Color-coded difficulty levels (Easy: green, Medium: orange, Hard: red)
- Responsive charts that adapt to screen size
- Hover tooltips showing exact counts

### Statistics Dashboard
- **Total Questions Card**: Shows complete question count
- **Most Popular Category Card**: Displays category with highest question count
- **Difficulty Breakdown Card**: Visual breakdown with colored indicators for easy/medium/hard questions

### Questions Table
- Expandable section to view detailed question information
- Each question card displays:
    - Question number
    - Difficulty badge with color coding
    - Category badge
    - Full question text with proper HTML entity decoding
    - Correct answer highlighted 
    - Stable answer shuffling
- Dynamic subtitle showing filtered question count

### User Experience
- Professional loading skeleton during data fetch
- Smooth hover effects and transitions on all interactive elements
- Responsive design 
- Clean, modern UI 
- Card-based layout 
- Proper HTML entity decoding throughout (handles &amp;, &quot;, &#039;, etc.)

## Technologies Used

- **React 19.2.0** - UI framework with functional components and hooks
- **Recharts 3.3.0** - Chart library for data visualization
- **React Icons 5.5.0** - Icon library for UI elements
- **React Loading Skeleton 3.5.0** - Skeleton screens for loading states
- **Open Trivia DB API** - Source for trivia questions

## Installation

1. Clone the repository
```bash
   git clone [your-repo-url]
   cd open-trivia-visualizer
```

2. Install dependencies
```bash
   npm install
```

3. Start the development server
```bash
   npm start
```

4. Open http://localhost:3000 in your browser

## Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

The app will be available at: `https://[your-username].github.io/[repo-name]`

## Project Structure
```
src/
├── components/
│   ├── CategoryList.js       - Category buttons with search, sort, and filter
│   ├── CategoryChart.js      - Bar chart showing question distribution by category
│   ├── DifficultyChart.js    - Pie chart showing difficulty distribution
│   ├── StatsCards.js         - Summary statistics cards
│   ├── QuestionsTable.js     - Expandable table with question details
│   └── LoadingSkeleton.js    - Loading state placeholder
├── utils.js                  - Utility functions (data processing, HTML decoding, colors)
├── cachedData.json          - Fallback data with 50 real trivia questions
├── App.js                   - Main application component
└── App.css                  - Global styles and component styling
```

## API Reference

Open Trivia Database API: https://opentdb.com

Endpoints used:
- Token generation: `https://opentdb.com/api_token.php?command=request`
- Question fetch: `https://opentdb.com/api.php?amount=50&token={token}`

## License

This project was created as a test task for the JetBrains Survey Visualizer integration internship application.