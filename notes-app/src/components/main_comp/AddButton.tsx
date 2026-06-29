import React, {useState} from 'react';
//@ts-ignore
import '../styles.css';
import Notepad from '../../pages/Notepad';
import { PlusIcon } from '@heroicons/react/24/solid';

const AddButton = () => {

    return (
        
            <div style={{ zIndex: 100 }}>
                    <div className="liquidGlass-wrapper button">
                        <div className="liquidGlass-effect"></div>
                        <div className="liquidGlass-tint"></div>
                        <div className="liquidGlass-shine"></div>
                            <PlusIcon style={{ width: '24px', height: '24px', color: 'white', zIndex: '100'}}/>
                    </div>
            </div>
        
        
    );
}

export default AddButton;