import React, {useState, useRef, useEffect} from 'react';
import type { Note } from '../../NoteModel';
//@ts-ignore
import '../styles.css';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import invariant from 'tiny-invariant';
import { useNavigate } from "react-router-dom";

type Props = {
    note: Note,
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const Notecard = ({note, notes, setNotes}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editNote, setEditNote] = useState<string>(note.title);


    // NOTE DONE


    //if note id matches then flip isDone value of that note
    //else keep that note the same
    const handleDone = (id: number) => {
        setNotes(notes.map((note)=>
            note.id===id ?{
                ...note, isDone:!note.isDone
            }: note
        ))
    };


    //DELETE NOTE


    //delete the note by keeping the notes that match the id
    //.filter removes the ones that dont match
    const handleDelete = (id: number) => {
        setNotes(notes.filter((note) => note.id !== id));
    };


    // EDIT NOTE //


    const handleEdit = (e: React.FormEvent, id: number) => {
        //dont refresh screen
        e.preventDefault();

        //map the notes and if note id matches target then edit the note
        setNotes(notes.map((note) =>
            (note.id === id ? {...note, title:editNote} : note
        )));

        //leave edit mode
        setEdit(false);
    };
    
    const inputRef = useRef<HTMLInputElement>(null);
    //when inputRef fires when edit = true, this func is called and automatically puts mouse in input thing
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])


    // DRAGGABLE


    //div element
    const dragRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<boolean>(false);

    //make draggable
    useEffect(() => {
        //get obj
        const el = dragRef.current;
        invariant(el);

        return draggable({
            element: el,
            getInitialData: () => ({ id: note.id }),
            onDragStart: () => setDragging(true),
            onDrop: () => setDragging(false),
        });
    }, []);

    

    //navigate through dynamic route to notepads
    const nav = useNavigate();

    return (
        <div 
            ref={dragRef}
            className="liquidGlass-notecard" 
            onClick={() => {nav(`/note/${note.id}`);}}
            style={{ width: '100%', background: note.isDone ? 'rgba(6, 175, 0, 0.6)' : ''
            
        }}>
            <div className="liquidGlass-effect"></div>
            <div className="liquidGlass-tint"></div>
            <div className="liquidGlass-shine"></div>

            <form className="notecard" onSubmit={(e) => {
                handleEdit(e, note.id);
                e.stopPropagation()}}
                
                >
                {/* check if note is done and display title differently based on t/f value */}
                {/* also check if note is being edited and if it is display input */}

                {/* input already has title as value*/}
                {/* onChange takes event obj (e).target.value (the current text inside the input) and updates the state with the next text */}
                
                {
                    edit ? (
                        <input
                            value={editNote} 
                            onChange={(e) => setEditNote(e.target.value)} className="notecard--text"
                            onClick={(e) => e.stopPropagation()}
                        />
                    ): (    
                        <span className="notecard--text">{note.title}</span>
                    )
                }

                <div onClick={(e) => e.stopPropagation()}>
                    {/* check if note isnt done and not being edited */}
                    <span className="icon" onClick={(e) => {
                        if (!edit && !note.isDone){
                            setEdit(!edit);
                        };
                        e.stopPropagation();
                    }}>
                        <AiOutlineEdit />
                    </span>
                    <span className="icon" onClick={(e) => e.stopPropagation()}>
                        <AiOutlineDelete onClick={(e)=>handleDelete(note.id)}/>
                    </span>
                    <span className="icon" onClick={(e)=> {
                        handleDone(note.id);
                        e.stopPropagation()}}
                    >
                        <MdOutlineDone />
                        
                    </span>
                </div>
            </form>
        </div> 
        
    )
}



export default Notecard;