import React, { useState } from 'react';
import '../App.css';
import '../components/styles.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Notepad from './Notepad';
import type { Note } from '../NoteModel';

const App: React.FC = () => {

  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <Routes>
      {/* send notes arr and set notes func to Home and Notepad pages*/}
      <Route path="/" element={<Home notes={notes} setNotes={setNotes} />} />
      <Route path="/note/:id" element={<Notepad notes={notes} setNotes={setNotes} />} />
    </Routes>
  );
};

export default App;
