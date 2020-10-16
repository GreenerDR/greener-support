import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import "./TicketResponse.styles.scss";

export default function TicketResponse() {
    return (
        <div className='response-container'>
            <b>Juan Ovalle respondió hace 2 semanas</b>
            <div className='message'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus purus est, eu fermentum urna eleifend vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
        </div>
    )
}

