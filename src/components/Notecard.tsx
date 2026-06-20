import React, {useState} from 'react';
//@ts-ignore
import './styles.css';

interface NotecardProps {
    key: number;
    title: string;
    onClick: (title: string) => boolean;
}

const Notecard = ({ key, title, onClick}: NotecardProps) => {

    //sets new title (future implementation)
    const[newTitle, setTitle] = useState<string>("");

    //make note card
        //title
    //make notepad
        //back button

    function getNoteTitle(): string {
        return title;
    }

    return (

        <div className="liquidGlass-wrapper button">
                    <div className="liquidGlass-effect"></div>
                    <div className="liquidGlass-tint"></div>
                    <div className="liquidGlass-shine"></div>
                    <div className="liquidGlass-text">
                        <div>{title}</div>
                    </div>
                    
                    
                </div>
    )
}



export default Notecard;