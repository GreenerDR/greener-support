import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import "./HomePage.styles.scss"

export default function HomePage() {
    return (
        <section className="home-page jumbotron">
            <h1 className="display-4 mb-4">Bienvenido a la página de soporte de Greener.</h1>
            <div className="flex-row-center">
                <div className="w-75 mt-15">
                    <p>Si estás visitando esta página, es porque tuviste algún problema. Estamos aquí para ayudarte.</p>

                    <h4>¿Qué es Greener?</h4>
                    <p>Greener es una app móvil que te brindará la información necesaria para hacer un mundo más verde.</p>

                    <h4>Funcionalidades de esta página</h4>
                    <ul>
                        <li>Creación de tickets</li>
                        <li>Visualización de tickets creados</li>
                        <li>Soporte técnico 24/7</li>
                    </ul>
                    <Link to="/login" className="btn btn-primary logInBtn">Iniciar Sesión</Link>
                </div>
                <img src={Logo} id='HomeLogo' alt='Logo Greener' />

            </div>
        </section>

    )
}

