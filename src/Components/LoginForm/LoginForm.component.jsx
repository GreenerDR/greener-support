import React, {useState, useCallback} from "react";
import Logo from '../../assets/logo.png';
import './LogInForm.styles.scss';
import axios from 'axios';

const handleChange = (setFunction) => (newStateEvent) => {
  setFunction(newStateEvent.target.value);
};

export default function LoginForm() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    
    const changeEmail = useCallback(handleChange(setEmail), [setEmail]);
    const changePassword = useCallback(handleChange(setPassword), [setPassword]);

    const handleSubmit = useCallback(
      (event) => {
        setDisabled(true);
        event.preventDefault();  
        
        axios
          .post('https://greener-support.herokuapp.com/auth/local', {
            identifier: email,
            password: password,
        })
          .then(response => {
          // Handle success.
          //console.log('Well done!');
          //console.log('User profile', response.data.user);
          console.log(response.data.json());
        })
          .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        })
          .finally(() => {
            setDisabled(false);
          });
        
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
      [email, password]
    );


  return (
    <div className = 'login-form-component'>
     <img 
        className = "LogoImage"
        src = {Logo}
      />
      <h1>Inicio de sesión</h1>
       <form className = 'formStyle' onSubmit = {handleSubmit}>
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
