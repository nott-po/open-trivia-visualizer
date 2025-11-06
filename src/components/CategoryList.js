import { useState } from 'react';
import {FiSearch, FiX} from "react-icons/fi";
import {MdNumbers} from "react-icons/md";
import {BiSortAlt2} from "react-icons/bi";

function CategoryList({ questions, selectedCategory, onCategorySelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('alphabetical'); // or count

    if (!questions || questions.length === 0) {
        return null;
    }

    const categories = [...new Set(questions.map(q => q.category))].sort();

    const filteredCategories = categories.filter(category => category.toLowerCase().includes(searchTerm.toLowerCase()));

    // sorting based on the selectted option
    if(sortBy === 'alphabetical') {
        filteredCategories.sort();
    } else if(sortBy === 'count'){
        filteredCategories.sort((a,b) => {
            const cA = questions.filter(q => q.category === a).length;
            const cB = questions.filter(q => q.category === b).length;
            // descending
            return cB - cA;
        })
    }

    return (
        <div className="category-list">
            <div className="category-header">
                <h2>Categories</h2>

                <div className={"category-controls "}>
                <div className={"sort-buttons"}>
                    <button
                        className={`sort-btn ${sortBy === 'alphabetical' ? 'active' : ''}`}
                        onClick={() => setSortBy('alphabetical')}
                        title="Sort alphabetically"
                    >
                        <BiSortAlt2 className="sort-icon" />
                        A-Z
                    </button>
                    <button
                        className={`sort-btn ${sortBy === 'count' ? 'active' : ''}`}
                        onClick={() => setSortBy('count')}
                        title="Sort by question count"
                    >
                        <MdNumbers className="sort-icon" />
                        Count
                    </button>
                </div>

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