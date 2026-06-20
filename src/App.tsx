import React, {useState} from 'react';
//@ts-ignore
import './App.css';
//@ts-ignore
import './components/styles.css';
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';
import Notecard from './components/Notecard';

const App: React.FC = () => {

  //useState notes array (string) that is empty that adds note titles to it
  const[notes, setNotes] = useState<string[]>([]);

  //add new note title to list
  const handleAdd = (title: string) => {
    //makes new array copy and adds new title to back
    // .push would not rerender react
    setNotes([...notes, title]);  
  }

  const setOpenNote = (title: string) => {
    //open note
    return false;
  }


  return (
    <div className="App">
      
      <span className="heading">Welcome Back name</span>

      

      <div className="ui-container"> 
        <div>
          <AddButton onAdd={handleAdd}/>
            {/* maps notes array by note title and its index, making Notecard objects */}
            {notes.map((note, index) => (
              <Notecard key={index} title={note} onClick={() => setOpenNote(note)} />
            ))}
        </div>
        
        <div style={{width: '70%'}}>
          <SearchBar />
        </div>

      </div>

    </div>
  );
}

export default App;
