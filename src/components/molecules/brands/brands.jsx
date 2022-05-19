import React from "react";
import './brands.scss'
import { numFormat } from "../../../utils/formatjsons";
const Marcas = (props) => {
    return (
        
      <div  className="m-brands">
          {props.listamarcas.map((elem, i)  => (
              <div className="m-brands-cont">
                  <div className="m-brands-cont-img"><img src={elem.img} alt='Imagen 1'/> </div>
                  <br />
                  {/*<div className="m-inventory-cont-cantidad"><p>Cantidad</p></div>*/}
                  <div className="m-brands-cont-button" ><button><a href={elem.redirect} target="_blank" rel="noreferrer">Ver Marca</a></button></div>
              </div>
          ))}
      </div>
    );
  }

  export default Marcas;