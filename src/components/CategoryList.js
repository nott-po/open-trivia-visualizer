import { useState } from 'react';
import {FiSearch, FiX} from "react-icons/fi";

function CategoryList({ questions, selectedCategory, onCategorySelect }) {
    const [searchTerm, setSearchTerm] = useState('');

    if (!questions || questions.length === 0) {
        return null;
    }

    const categories = [...new Set(questions.map(q => q.category))].sort();

    const filteredCategories = categories.filter(category => category.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="category-list">
            <div className="category-header">
                <h2>Categories</h2>
                <div className="search-bar">
                    <span className="search-icon">
                        <FiSearch className="search-icon" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    {searchTerm && (
                        <button
                            className="clear-search"
                            onClick={() => setSearchTerm('')}
                        >
                            <FiX />
                        </button>
                    )}
                </div>
            </div>

            <div className="category-buttons">
                <button
                    className={!selectedCategory ? 'active' : ''}
                    onClick={() => onCategorySelect(null)}
                >
                    All Categories ({questions.length})
                </button>

                {filteredCategories.map(category => {
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

            {filteredCategories.length === 0 && searchTerm && (
                <p className="no-results">No categories found matching "{searchTerm}"</p>
            )}
        </div>
    );
}

export default CategoryList;