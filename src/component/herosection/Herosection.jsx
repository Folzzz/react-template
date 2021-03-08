import React from 'react'
import Button from '../button/Button'
import { FaRegPlayCircle } from 'react-icons/fa'

import './herosection.css';

const Herosection = () => {

    let icon = {fontSize: "1rem"};

    return (
        <div className="hero-container">
            {/* if video */}
            {/* <video src="" autoplay loop muted/> */}
            <h1>BEST COZY LOCATIONS</h1>
            <p>Come and experience the best of life</p>
            <div className="hero-btns">
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large">WATCH LATER <FaRegPlayCircle style={icon}/> </Button>
            </div>
            
        </div>
    )
}

export default Herosection;
