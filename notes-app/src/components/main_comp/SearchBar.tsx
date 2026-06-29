import React, {useState} from 'react';
//@ts-ignore
import '../styles.css';

type Props = {
    handleSearch: (searchText: string) => void;
}

const SearchBar = ({handleSearch}: Props) => {

    //update the search text
    const [searchText, setSearchText] = useState<string>('');

    return (
        <div style={{ zIndex: 100, width: '100%'}}>
                <div className="liquidGlass-wrapper button" style={{width: '100%'}}>
                    <div className="liquidGlass-effect"></div>
                    <div className="liquidGlass-tint"></div>
                    <div className="liquidGlass-shine"></div>
                    
                    <div className="button" style={{width: '100%'}}>
                        
                        <input 
                            value={searchText} 
                            onChange={(e) => {
                                setSearchText(e.target.value); 
                                handleSearch(e.target.value);
                            }}   
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