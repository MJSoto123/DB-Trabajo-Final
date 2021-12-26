import React, { useReducer, useEffect } from "react";
import { TYPES } from "../actions/home.actions";
import { getAllCategories } from "../api/categories.api";
import { Header } from "../components/header.component";
import { homeInitialState, homeReducer } from "../reducers/home.reducers";

export const Product = () => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);
  const buy_status = () => {
    if (7> 0) {
      return <button className="buy">Comprar</button>;
    } else {
      return <button className="agotado">Agotado</button>;
    }
  };
  let desc = "La caña Shimano® FX 270, presenta un blank de fibra de vidrio Aeroglass, con una altura de 2.40 m y dividido en 2 cuerpos para mejor transporte, con un peso total de 310 g. El bastidor de las anillas, cuyas piedras son de cerámica SiC (Carborundio), y el porta-carrete, son de la marca Shimano®, fabricados en oxido de aluminio. El rango de acción para emplearla con señuelos, o plomos pequeños, es de 14 a 112 g. Es una caña perfecta, funcional y atractiva para iniciar en el mundo de la pesca deportiva.\n\n \n\nFICHA TÉCNICA:\n\nBlank de Fibra de Vidrio Aeroglass\nLongitud 2.40 m (8 pies)\nRango de acción 14-112 g\nTipo de acción rápida\nAnillas 6+1 (Tip guide) Shimano® Oxido de aluminio\nPorta-carrete Shimano® DPS\nTamaño en transporte 121 cm\nSecciones 2 piezas\nPeso 310 g La caña Shimano® FX 270, presenta un blank de fibra de vidrio Aeroglass, con una altura de 2.40 m y dividido en 2 cuerpos para mejor transporte, con un peso total de 310 g. El bastidor de las anillas, cuyas piedras son de cerámica SiC (Carborundio), y el porta-carrete, son de la marca Shimano®, fabricados en oxido de aluminio. El rango de acción para emplearla con señuelos, o plomos pequeños, es de 14 a 112 g. Es una caña perfecta, funcional y atractiva para iniciar en el mundo de la pesca deportiva.\n\n \n\nFICHA TÉCNICA:\n\nBlank de Fibra de Vidrio Aeroglass\nLongitud 2.40 m (8 pies)\nRango de acción 14-112 g\nTipo de acción rápida\nAnillas 6+1 (Tip guide) Shimano® Oxido de aluminio\nPorta-carrete Shimano® DPS\nTamaño en transporte 121 cm\nSecciones 2 piezas\nPeso 310 g La caña Shimano® FX 270, presenta un blank de fibra de vidrio Aeroglass, con una altura de 2.40 m y dividido en 2 cuerpos para mejor transporte, con un peso total de 310 g. El bastidor de las anillas, cuyas piedras son de cerámica SiC (Carborundio), y el porta-carrete, son de la marca Shimano®, fabricados en oxido de aluminio. El rango de acción para emplearla con señuelos, o plomos pequeños, es de 14 a 112 g. Es una caña perfecta, funcional y atractiva para iniciar en el mundo de la pesca deportiva.\n\n \n\nFICHA TÉCNICA:\n\nBlank de Fibra de Vidrio Aeroglass\nLongitud 2.40 m (8 pies)\nRango de acción 14-112 g\nTipo de acción rápida\nAnillas 6+1 (Tip guide) Shimano® Oxido de aluminio\nPorta-carrete Shimano® DPS\nTamaño en transporte 121 cm\nSecciones 2 piezas\nPeso 310 g";
  const description_changes = () => {
      if (desc.length > 1000){
          desc = desc.substring(0,700);
      }
      return(desc);
  }
  useEffect(()=>{
    console.log("hola")
    getAllCategories().then(res => {
      console.log(res);
      dispatch({ type: TYPES.READ_CATEGORIES_DATA, payload: res})
    })
  },[]);
  return (
    <div>
      <Header/>
      <div className="single_product-container">
        <div className="single_product-img-container">
          <img
            className="single_product-img"
            src="https://www.mundopescaperu.com/wp-content/uploads/2021/10/shimano-fx-8-feet.png"
            alt="new"
          />
        </div>
        <div className="single-product-body">
          <h1>FX 240 / 14 - 112g ® SHIMANO</h1>
          <div className="price-stock">
            <h3>S/.{149}</h3>
            {buy_status()}
          </div>
          <p>61bf6e6328b279c5bbe4cf96 categories</p>
          <h4>DESCRIPCIÓN</h4>
          <p className="product-description">
            {description_changes()}
          </p>
        </div>
      </div>
    </div>
  );
};