import React, {useState, useCallback} from "react";
import Logo from '../../assets/logo.png';
import './RegisterForm.styles.scss';
import axios from 'axios';

const handleChange = (setFunction) => (newStateEvent) => {
  setFunction(newStateEvent.target.value);
};

export default function RegisterForm(){
    
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPass, setconfirmedPass] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);
    
    const changeName = useCallback(handleChange(setName), [setName]);
    const changeEmail = useCallback(handleChange(setEmail), [setEmail]);
    const changePassword = useCallback(handleChange(setPassword), [setPassword]);
    const changeConfirmedPassword = useCallback(handleChange(setconfirmedPass), [setconfirmedPass]);

    return(
        <div className = "register-form-component">
             <img 
            className = "LogoImage"
            src = {Logo}
      />
      <h1>Registro de cuenta</h1>
       <form className = 'formStyle'>
       <div className="form-group">
          <label 
          className = 'labelStyle'
          htmlFor="name">Nombre completo</label>
          <input
            name="name"
            type="email"
            className="form-control formInput"
            id="name"
            placeholder="Joe Mama"
            value = {name}
            onChange = {changeName}
          />
        </div>
        <div className="form-group">
          <label 
          className = 'labelStyle'
          htmlFor="email">Correo electrónico</label>
          <input
            name="email"
            type="email"
            className="form-control formInput"
            id="email"
            placeholder="nombre@ejemplo.com"
            value = {email}
            onChange = {changeEmail}
          />
        </div>
        <div className="form-group">
          <label 
          className = 'labelStyle'
          htmlFor="password">Contraseña</label>
          <input
            name="password"
            type="password"
            className="form-control formInput"
            id="password"
            value = {password}
            onChange = {changePassword}
          />
        </div>
        <div className="form-group">
          <label 
          className = 'labelStyle'
          htmlFor="password">Confirmar contraseña</label>
          <input
            name="password"
            type="password"
            className="form-control formInput"
            id="password"
            value = {confirmedPass}
            onChange = {changeConfirmedPassword}
          />
        </div>
        <button className="btn btn-primary logInBtn" type="submit" disabled = {disabled}>
        {disabled ? (
            <span
              className="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            >
            </span>
          ) : null}
          Iniciar sesión
        </button>
      </form>
        </div>
    );
} 