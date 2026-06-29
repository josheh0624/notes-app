import React from "react";
import '../styles.css';
import { HiArrowLongLeft } from "react-icons/hi2";

const Back = () => {
    return (
        <div className="liquidGlass-wrapper back-button">
            <div className="liquidGlass-effect"></div>
            <div className="liquidGlass-tint"></div>
            <div className="liquidGlass-shine"></div>
                <HiArrowLongLeft style={{ width: '24px', height: '24px', color: 'white', zIndex: '100'}}/>
        </div>   
    )
}

export default Back;