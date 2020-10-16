import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import TicketResponse from "../../components/TicketResponse/TicketResponse.component";
import "./TicketDetail.styles.scss";

export default function TicketDetail() {
    return (
        <div className='container'>
            <div className='ticket-container'>
                <h1>Ticket #1db23</h1>
                <b>Abierto por Pedro Perez, hace 1 mes</b>
                <span class="badge badge-success state">Resuelto</span>
                <div className='message'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus purus est, eu fermentum urna eleifend vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at ultrices eros. Etiam a est a massa sodales elementum. Donec congue, lorem et dapibus volutpat, arcu dui pulvinar tellus, non molestie libero metus non orci. Nullam dictum sollicitudin ante. Duis aliquam eros et ultrices pharetra. Sed pretium fringilla massa eu sollicitudin.</p>
                </div>
            </div>
            <div className="response">
                <TicketResponse/>
            </div>  
        </div>      
    )
}

