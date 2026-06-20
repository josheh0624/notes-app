import React from 'react';
//@ts-ignore
import './styles.css';

interface NoteProps {
    title: string;
    onBack: () => void;
}

const Notepad = ({title, onBack}: NoteProps) => {
    return (
        <div className="note-editor">
            <button onClick={onBack}>←</button>
            <h1>{title}</h1>
            <textarea placeholder="Type here..." />
        </div>
    );
}

export default Notepad;