function CategoryList({ questions, selectedCategory, onCategorySelect }) {
    if (!questions || questions.length === 0) {
        return null;
    }

    const categories = [...new Set(questions.map(q => q.category))].sort();

    return (
        <div className="category-list">
            <h2>Categories</h2>

            <div className="category-buttons">
                <button
                    className={!selectedCategory ? 'active' : ''}
                    onClick={() => onCategorySelect(null)}
                >
                    All Categories ({questions.length})
                </button>

                {categories.map(category => {
                    const count = questions.filter(q => q.category === category).length;
                    return (
                        <button
                            key={category}
                            className={selectedCategory === category ? 'active' : ''}
                            onClick={() => onCategorySelect(category)}
                        >
                            {category} ({count})
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default CategoryList;