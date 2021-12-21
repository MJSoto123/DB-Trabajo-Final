import React from "react";

export const Header = (props) => {
  const login = () => {
    if (true) {
      return (
        <div className="sesion-container">
          <button>Registrarse</button>
        </div>
      );
    }
  };
  const console2 = () => {
    console.log(props);
  }
  
  // let itemList=items.map((item,index)=>{
  //   return <li key={index}>{item}</li>
  // })
  const menu_categories = () => {
    let itemList = props.map((item)=>{
      return <a href="/" className="categoria-link">{item.category}</a>
    })
    return itemList
  }

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
        <div>
          {menu_categories()}
        </div>
      </div>
      <div className="registro">
        {login()}
      </div>
    </div>
  );
};
