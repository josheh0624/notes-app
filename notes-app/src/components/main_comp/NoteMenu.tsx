import React, {useRef, useEffect} from "react";
//@ts-ignore
import '../styles.css';
import { PlusIcon } from '@heroicons/react/24/solid';

interface NoteMenuProps {
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    style?: React.CSSProperties;
}

const NoteMenu = ({note, setNote, handleAdd}: NoteMenuProps) => {
    
    const inputRef = useRef<HTMLInputElement>(null);

    //when inputRef fires when edit = true, this func is called and automatically puts mouse in input thing
    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    
    return(

        <div className="note-menu">
            <div className="liquidGlass-effect"></div>
            <div className="liquidGlass-tint"></div>
            <div className="liquidGlass-shine"></div>
        
            <span style={{ zIndex: 100 }}>   
                <form  className="note-menu__form"
                onSubmit={(e) => {
                    handleAdd(e);
                    inputRef.current?.blur();
                    
                }}
                    onClick={(e) => e.stopPropagation()} // makes it so clicking doesnt turn displayInput (app.tsx) to false
                >
                    <input type="input"
                    ref={inputRef}
                    value={note}
                    onChange={(e)=>setNote(e.target.value)}
                    placeholder="Enter Note Name" 
                    className="note-menu__box" 
                    />
                    <button className="note-menu_submit" type='submit'>
                        <PlusIcon style={{ width: '20px', height: '20px', color: 'white'}}/>
                    </button> 
                </form>
            </span>
        </div>
        
    );
}

export default NoteMenu;