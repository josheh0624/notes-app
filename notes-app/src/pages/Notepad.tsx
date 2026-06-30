import React, {useState} from 'react';
//@ts-ignore
import '../components/styles.css';
import '../App.css'
import { useParams } from "react-router-dom";
import type { Note } from '../NoteModel';
import Back from '../components/notepad_comp/Back';
import { useNavigate } from "react-router-dom";

interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const Notepad = ({notes, setNotes}: Props) => {

    //navigate back home
    const nav = useNavigate();

    //set unique note id
    const { id } = useParams<{ id: string }>();

    //find n in notes that matches id
    const note = notes.find((n) => n.id === Number(id));
    if (!note) return (
    <>
        <div onClick={() => {nav(`/`);}} style={{position: 'fixed'}}>
            <Back />
        </div>
        <p style={{alignItems: 'center', }}>Note not found.</p>
    </>
    );

    //on change, if n id matches note id, then update the content in n
    //also saves content in object
    const handleChange = (content: string) => {
    setNotes(notes.map((n) =>
      n.id === note.id ? { ...n, content } : n
    ));
  };

    

    return (
        <div className="app-notepad">
            <div
                onClick={() => {nav(`/`);}}
                style={{zIndex: '100'}}
                className="back-button-wrapper"
            >
                <Back />
            </div>     
  
            <span className="notepad-heading">{note.title}</span>
               
                
            <textarea 
                value={note.content}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Type here..."
                className="note-editor"
            />
        </div>
    );
}

export default Notepad;