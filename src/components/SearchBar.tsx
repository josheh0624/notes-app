import React from 'react';
//@ts-ignore
import './styles.css';

const SearchBar = () => {
    return (
        <div style={{ zIndex: 100, width: '100%'}}>
                <div className="liquidGlass-wrapper button" style={{width: '100%'}}>
                    <div className="liquidGlass-effect"></div>
                    <div className="liquidGlass-tint"></div>
                    <div className="liquidGlass-shine"></div>
                    
                    <div className="button" style={{width: '100%'}}>
                        
                        <input 
                            type="search" 
                            placeholder="Search..."
                            className="search-bar"
                            
                        />
                    </div>
                    
                </div>
        </div>
        
    )
}

export default SearchBar;