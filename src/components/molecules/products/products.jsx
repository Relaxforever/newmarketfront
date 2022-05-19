import React from "react";
import './products.scss'
import { numFormat } from "../../../utils/formatjsons";

/*
import ejemplo6 from  "../../../assets/ejemplo6.jpg"
import ejemplo4 from "../../../assets/ejemplo4.jpg"
import ejemplo3 from "../../../assets/ejemplo3.jpg"
import ejemplo2 from "../../../assets/ejemplo2.jpg"
import ejemplo5 from "../../../assets/ejemplo5.jpg"
import ejemplo8 from "../../../assets/ejemplo8.jpg"
import ejemplo7 from "../../../assets/ejemplo8.jpg"
import ejemplo9 from "../../../assets/ejemplo9.jpg"
import ejemplo10 from "../../../assets/ejemplo10.jpg"
import ejemplo11 from "../../../assets/ejemplo11.jpg"
import ejemplo12 from "../../../assets/ejemplo10.jpg"
import ejemplo13 from "../../../assets/ejemplo11.jpg"
import ejemplo14 from "../../../assets/ejemplo10.jpg"
import ejemplo15 from "../../../assets/ejemplo11.jpg"
import ejemplo16 from "../../../assets/ejemplo11.jpg"
*/

const Productos = (props) => {
/*
    const  listaImagenes = [ ejemplo2, ejemplo3, ejemplo4, ejemplo5, ejemplo6, ejemplo7, ejemplo8, ejemplo9, ejemplo10,  ejemplo11, ejemplo12, ejemplo13, ejemplo14, ejemplo15, ejemplo16]

*/
const buyProducto = (elem) => {
    localStorage.setItem('ProductoAComprar', JSON.stringify(elem));

        // Retrieve the object from storage
            var retrievedObject = localStorage.getItem('ProductoAComprar');

            console.log('retrievedObject: ', JSON.parse(retrievedObject));
            setTimeout(redirect, 2000);
}

const redirect = () => {
    window.location.href = "http://newmarketfront.herokuapp.com/informacion-cliente-compra";
}

/*
    const GetProducts = async  () => {
        try {
            setLoading(true);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Envio_Objeto)
            };
            const response = await fetch('http://127.0.0.1:8000/users/', requestOptions);
            const data = await response.json();
            console.log(response.status);
            if (response.status === 200){
                setExito(1)
                setLoading(false)
            }  else {
                setExito(2)
                setLoading(false)
            }
        }
        catch  (err) {
            console.error(err)
        }
    }*/
    return (
        
      <div  className="m-product">
          { props.listaproductos.length !== 0 ? props.listaproductos.map((elem, i)  => (
              <div className="m-product-cont" key={elem.nombre}>
                  <div className="m-product-cont-img"><img src={elem.foto_productos} alt='Imagen 1'/> </div>
                  <div className="m-product-cont-price"><p>$ {numFormat(elem.valor)}</p></div>
                  <div className="m-product-cont-name"><p>{elem.nombre}</p></div>

                  {/*<div className="m-inventory-cont-cantidad"><p>Cantidad</p></div>*/}
                  <div className="m-product-cont-button"><button onClick={() => buyProducto(elem)}>Comprar</button></div>
              </div>
          )) : <div className="loader"></div>}

      </div>
    );
  }

  export default Productos;