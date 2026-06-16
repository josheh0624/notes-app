import React from 'react';
import './styles.css';

const SearchBar = () => {
    return (
        <div className="search-wrapper" >
            <input 
                type="search" 
                placeholder="Search..."
                className="search-bar"
            />
            <button type="submit" aria-label='Search'>
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    viewBox="0 0 24 24"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

            </button>
        </div>
    )
}

export default SearchBar;