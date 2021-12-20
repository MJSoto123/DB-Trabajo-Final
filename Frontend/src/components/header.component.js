import React from "react";

export const Header = () => {
  const login = () => {
    if (true) {
      return (
        <div className="sesion-container">
          <button>Registrarse</button>
        </div>
      );
    }
  };
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
        />
      </div>
      <div className="centro-container">
        <div className="lupa-container">
          <img
            className="lupa"
            src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png"
            alt="new"
          />
        </div>
        <div className="categoria">
          <a className="categoria-link" href="">Cañas</a>
          <a className="categoria-link" href="">Carretes</a>
          <a className="categoria-link" href="">Sedales</a>
          <a className="categoria-link" href="">Accesorios</a>
          <a className="categoria-link" href="">Equipamento</a>
        </div>
      </div>
      <div className="registro">
        {login()}
      </div>
    </div>
  );
};
