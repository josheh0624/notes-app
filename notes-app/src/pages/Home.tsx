import React, { useState } from 'react';
import AddButton from '../components/main_comp/AddButton';
import SearchBar from '../components/main_comp/SearchBar';
import NoteMenu from '../components/main_comp/NoteMenu';
import NotecardList from '../components/main_comp/NotecardList';
import type { Note } from '../NoteModel';
import '../App.css';
import '../components/styles.css';


interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const Home: React.FC<Props> = ({ notes, setNotes }) => {

  const [note, setNote] = useState<string>("");
  const [displayInput, setDisplayInput] = useState<boolean>(false);


  //ADD BUTTON FUNCTIONS//


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    //set note props
    if (note) {
      setNotes([...notes, {
        id: Date.now(),
        title: note,
        content: "",
        isDone: false,
        updatedAt: Date.now()
      }]);
      setNote("");
    }
    //turn off
    setDisplayInput(false);
  };


  //SEARCH BAR FUNCTIONS//


  //search state to know when to sub in copy arr and back to real arr after done searching
  const [searchBool, setSearchBool] = useState<boolean>(false);

  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);

  const filterNotes = (notes: Note[], search: string) => {
    
    const searchChars = search.split('');

    //return notes that only cont
    return notes.filter(note => {
      //get note title chars
      const titleChars = note.title.split('');
      let searchIndex = 0;

      //loop through titleChars comparing to searchChars
      for (let i = 0; i < titleChars.length; ++i) {
        //if titleChars == searchChars @ searchIndex then searchIndex++
        if(titleChars[i] === searchChars[searchIndex]){
          searchIndex++;
        }
        
        //search index reaches end of search
        if(searchIndex === searchChars.length) return true;

      }

      return false;

    })
  }


  const handleSearch = (searchText: string) => {
      //if nothing searched display notes
      if (searchText === '') {
        setFilteredNotes(notes);
        setSearchBool(false);
    } else {
        //else filter the notes based on searchText
        setFilteredNotes(filterNotes(notes, searchText));
        setSearchBool(true);
    }
  };




  return (
    <div className="App">
      <span className="heading">Welcome Back</span>

      {displayInput && (
        <div className="backdrop" onClick={() => setDisplayInput(false)}>
          <div className="note-menu-container">
            <NoteMenu
              note={note}
              setNote={setNote}
              handleAdd={handleAdd}
              style={{ zIndex: 1000, justifyContent: 'center', alignItems: 'center' }}
            />
          </div>
        </div>
      )}

      <NotecardList
        notes={searchBool ? filteredNotes : notes}
        setNotes={setNotes}
      />

      <div className="ui-container">
        <div onClick={() => setDisplayInput(!displayInput)}>
          <AddButton />
        </div>
        <div style={{ width: '70%' }}>
          <SearchBar handleSearch={handleSearch}/>
        </div>
      </div>

    </div>
  );
};

export default Home;