import React from "react";
import { Link } from "react-router-dom";
import "./TicketsPage.styles.scss"

export default function TicketsPage() {
    return (
        <>
            <section className="jumbotron">
                <h1 className="display-4">Tickets</h1>
                <span><Link to="/support" className="btn createbtn">Crear</Link></span>
                <div className="flex-row-center">
                    <div className="w-75 mt-15">
                        <table class="table table-bordered table-light">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Mensaje</th>
                                    <th scope="col">Fecha de modificación</th>
                                    <th scope="col">Fecha de creación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><button type="button" class="btn btn-success">Resuelto</button></td>
                                    <td>Me da error el Log In</td>
                                    <td>15 de octubre</td>
                                    <td>23 de septiembre</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><button type="button" class="btn btn-warning">Abierto</button></td>
                                    <td>No puedo cerrar sesión</td>
                                    <td>15 de octubre</td>
                                    <td>14 de octubre</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
        </>
    )
}

