import React, {useState} from 'react';
//@ts-ignore
import './styles.css';
import Notepad from './Notepad';

// or
import { PlusIcon } from '@heroicons/react/24/solid';



const AddButton = ({ onAdd }: { onAdd: (title: string) => void }) => {

    const[title, setTitle] = useState<string>("Enter a Title...");
    const[displayInput, setDisplayInput] = useState<boolean>(false);

    

    const handleClick = () => {
        console.log("clicked");
        //toggle display on (true)
        setDisplayInput(true);
        console.log(displayInput);
    }

    const handleNoteCreate = () => {
        if (title.trim()) {
            onAdd(title);        //send title up to App
            setTitle("");        //reset
            setDisplayInput(false);
        }
    }

    return (
        <div>
            {displayInput && (
                <div className="create-note-menu">
                    <input
                        type="text"
                        placeholder="Enter a title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onClick={handleNoteCreate}>Create</button>
                </div>
            )}

            <div style={{ zIndex: 100 }}>
                    <div className="liquidGlass-wrapper button" onClick={() => setDisplayInput(!displayInput)}>
                        <div className="liquidGlass-effect"></div>
                        <div className="liquidGlass-tint"></div>
                        <div className="liquidGlass-shine"></div>
                        
                        <div className="button" onClick={handleClick}>
                            <PlusIcon style={{ width: '24px', height: '24px', color: 'white'}}/>
                        </div>
                        
                    </div>
            </div>
        </div>
        
        
    );
}

export default AddButton;