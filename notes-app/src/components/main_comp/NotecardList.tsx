import React from "react";
import Notecard from "./Notecard";
import type {Note} from '../../NoteModel';
//@ts-ignore
import '../styles.css';
import { dropTargetForElements, monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

interface Props {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotecardList: React.FC<Props> = ({notes, setNotes}: Props) => {

    return (
        
        <div className="notecard-list">
            {notes.map((note) => (    
                <Notecard note={note} key={note.id}
                    notes={notes}
                    setNotes={setNotes}
                />
            ))}
        </div>
    )
}

export default NotecardList;