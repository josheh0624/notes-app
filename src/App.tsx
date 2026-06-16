import React from 'react';
import './App.css';
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Welcome Back name</span>
      <div className="ui-container"> 
          <div>
            <AddButton/>
          </div>
          <div>
            <SearchBar />
          </div>
      </div>
    </div>
  );
}

export default App;
