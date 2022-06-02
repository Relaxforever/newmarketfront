import React,  {useState, useEffect} from "react";
import Container from "../components/organism/container/container"
import { numFormat } from "../utils/formatjsons";
import '../context/pedido.scss'


const Pedido = () => {


    const [infoProduct, setInfoProduct] = useState({})



    useEffect(() => {
        let retrievedUser = localStorage.getItem('ProductoAComprar');
          setInfoProduct(JSON.parse(retrievedUser));
      }, [])

    return (
      <Container>
        <div className="r-ruta-pedido">
        <h2>Llega el 8 de Junio del 2022</h2>
            <div  className="o-informacion-producto">
        <div className="o-informacion-producto-info">
        { infoProduct.length !== 0 ? (
        <>
        <h2 className="o-informacion-pago-titulo">Compraste</h2>
        <div className="o-informacion-producto-info-cont" key={infoProduct.nombre}>
        <div className="o-informacion-producto-info-cont-img"><img src={infoProduct.foto_productos} alt='Imagen 1'/> </div>
        <div className="o-informacion-producto-info-cont-name"><p>{infoProduct.nombre}</p></div>
        <div className="o-informacion-producto-info-cont-objeto"><p>{infoProduct.description}</p></div>
        <div className="o-informacion-producto-info-cont-cantidad"><p>Cantidad: 1</p></div>
        </div>
        <div className="o-informacion-producto-info-valor">
        <div className="o-informacion-producto-info-valor-price">
        <p>Producto: </p>
        <p>$ {numFormat(infoProduct.valor)}</p>
        </div>
        <div className="o-informacion-producto-info-valor-price">
        <p>Envio: </p>
        <p>$ 10.000</p>
        </div>
        </div>
        <div className="o-informacion-producto-info-total">
        <div className="o-informacion-producto-info-valor-price">
        <p>Total: </p>
        <p>{numFormat(infoProduct.valor + 10000)}</p>
        </div>
        </div>

        </>

        ) : <div className="loader"></div>}


        </div>
        <div className="o-informacion-producto-pagoinfo">

        </div>
        
        </div>
        
    </div>
      </Container>
    );
  }

  export default Pedido;