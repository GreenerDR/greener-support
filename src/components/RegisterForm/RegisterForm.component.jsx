import React, { useState, useCallback, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import Logo from "../../assets/logo.png";
import "./RegisterForm.styles.scss";

const handleChange = (setFunction) => (newStateEvent) => {
  setFunction(newStateEvent.target.value);
};

function RegisterForm({ history }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setconfirmedPass] = useState("");
  const [email, setEmail] = useState("");
  const [inRequest, setInRequest] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const changeName = useCallback(handleChange(setName), [setName]);
  const changeEmail = useCallback(
    (email) => {
      handleChange(setEmail)(email);
      setErrors({ ...errors, email: false });
    },
    [setEmail, errors]
  );
  const changePassword = useCallback(handleChange(setPassword), [setPassword]);
  const changeConfirmedPassword = useCallback(handleChange(setconfirmedPass), [
    setconfirmedPass,
  ]);

  useEffect(() => {
    setDisabled(password !== confirmedPass || !password.length);
    setErrors({ ...errors, password: password !== confirmedPass });
  }, [password, confirmedPass]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setDisabled(true);
      setInRequest(true);

      if (password === confirmedPass) {
        axios
          .post("https://greener-support.herokuapp.com/auth/local/register", {
            username: name,
            email: email,
            password: password,
          })
          .then((response) => {
            sessionStorage.setItem("jwt", response.data.jwt);
            sessionStorage.setItem("userId", response.data.user.id);
            history.push("/tickets");
          })
          .catch((error) => {
            // Handle error.
            setErrors({ ...errors, email: true });
            setDisabled(false);
            setInRequest(false);
          });
      }
    },
    [name, password, email, confirmedPass, errors, history]
  );

  return (
    <div className="register-form-component">
      <img className="LogoImage" src={Logo} alt="logo" />
      <h1>Registro de cuenta</h1>
      <form className="formStyle" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="labelStyle" htmlFor="name">
            Nombre completo
          </label>
          <input
            name="name"
            type="text"
            className="form-control formInput"
            id="name"
            placeholder="Joe Mama"
            value={name}
            onChange={changeName}
          />
        </div>
        <div className="form-group">
          <label className="labelStyle" htmlFor="email">
            Correo electrónico
          </label>
          <input
            name="email"
            type="email"
            className={`form-control formInput ${
              errors?.email ? "is-invalid" : ""
            }`}
            id="email"
            placeholder="nombre@ejemplo.com"
            value={email}
            onChange={changeEmail}
          />
          {errors.email ? (
            <div className="invalid-feedback">El correo ya está en uso</div>
          ) : null}
        </div>
        <div className="form-group">
          <label className="labelStyle" htmlFor="password">
            Contraseña
          </label>
          <input
            name="password"
            type="password"
            className="form-control formInput"
            id="password"
            value={password}
            onChange={changePassword}
          />
        </div>
        <div className="form-group">
          <label className="labelStyle" htmlFor="password">
            Confirmar contraseña
          </label>
          <input
            name="password"
            type="password"
            className={`form-control formInput ${
              errors.password ? "is-invalid" : ""
            }`}
            id="password"
            value={confirmedPass}
            onChange={changeConfirmedPassword}
          />
          {errors.password ? (
            <div className="invalid-feedback">Las contraseñas no coinciden</div>
          ) : null}
        </div>
        <button
          className="btn btn-primary logInBtn"
          type="submit"
          disabled={disabled}
        >
          {disabled ? (
            inRequest ? (
              <span
                className="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
              />
            ) : null
          ) : null}
          Registrarse
        </button>
        <p className = "textToLink">¿Ya tienes una cuenta de Greener? <a className = "hyperlink" href="/login">Inicia sesión</a></p>
      </form>
    </div>
  );
}

export default withRouter(RegisterForm);
