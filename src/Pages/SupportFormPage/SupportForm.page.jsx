import React, { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const handleChange = (setFunction) => (newStateEvent) => {
  setFunction(newStateEvent.target.value);
};

export default function SupportFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [screen, setScreen] = useState("Login");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(false);
  const changeName = useCallback(handleChange(setName), [setName]);

  const changeEmail = useCallback(handleChange(setEmail), [setEmail]);

  const changeScreen = useCallback(handleChange(setScreen), [setScreen]);

  const changeDescription = useCallback(handleChange(setDescription), [
    setDescription,
  ]);

  const handleSubmit = useCallback(
    (event) => {
      setDisabled(true);
      event.preventDefault();

      /*fetch("/ruta", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          screen,
          description,
        }),
      })
        .then((response) => response.json())
        .then(()=>{
            alert('Se ha enviado correctamente')
        })
        .finally(() => {
          setDisabled(false);
        });*/
    },
    [name, email, screen, description]
  );

  return (
    <>
      <div className="alert alert-success" role="alert">
        A simple success alert with{" "}
        <Link to="/home" className="alert-link">
          home
        </Link>
        . Give it a click if you like.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            placeholder="Jon Doe"
            value={name}
            onChange={changeName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Dirección de correo electrónico</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="nombre@ejemplo.com"
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="screen">Pantalla donde ocurrió el problema</label>
          <select
            className="form-control"
            id="screen"
            value={screen}
            onChange={changeScreen}
          >
            <option>Login</option>
            <option>Principal</option>
            <option>Guías</option>
            <option>Eventos</option>
            <option>Mapas</option>
            <option>Ajustes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción del problema</label>
          <textarea
            name="description"
            className="form-control"
            id="description"
            rows="3"
            placeholder="Ocurrió que..."
            value={description}
            onChange={changeDescription}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit" disabled={disabled}>
          {disabled ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            >
            </span>
          ) : null}
          Enviar
        </button>
      </form>
    </>
  );
}
