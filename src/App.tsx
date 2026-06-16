import React from 'react';
import './App.css';
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Welcome Back name</span>
      <div className="container">
        <span className="ui-bar">
          <div>
            <AddButton/>
          </div>
          <div>
            <SearchBar />
          </div>
          
        </span>
      </div>
      
      
    </div>
  );
}

export default App;
