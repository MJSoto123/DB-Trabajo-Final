import React from "react";

export class SignInForm extends React.Component {
  render() {
    return (
      <div className="contenedor mt-5">
        <form>
          <a href="/">
            <h2>Atrás</h2>
          </a>
          <p className="titulo">BIENVENIDO DE NUEVO</p>
          <div>
            No tengo una cuenta,
            <a href="/signup">Registrarme</a>
          </div>
          <div className="mt-3">
            <label for="email" className="etiqueta">
              Usuario
            </label>
            <input
              onChange={this.props.onChangeEmail}
              className="input_caja mt-1"
              id="correo"
              required
              placeholder="usuario@gmail.com"
              type="email"
              value={this.props.email}
            />
          </div>
          <div className="mt-3">
            <label for="contrasena" className="etiqueta">
              Contraseña
            </label>
            <input
              onChange={this.props.onChangePassword}
              value={this.props.password}
              type="password"
              className="input_caja mt-1"
              id="contrasena"
              required
              placeholder="●●●●●●●●●●"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={this.props.onClick}
              type="submit"
              className="boton"
            >
              Iniciar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
