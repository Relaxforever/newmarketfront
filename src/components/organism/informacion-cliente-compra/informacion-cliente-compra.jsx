import React, {useState, useEffect} from "react";
import './informacion-cliente-compra.scss'
import { numFormat } from "../../../utils/formatjsons";
const InformacionCliente = () => {

  const [infoUser, setInfoUser] = useState({})
  const [infoProduct, setInfoProduct] = useState({})

  console.log(infoProduct)
  console.log(infoUser)
  useEffect(() => {
    let retrievedUser = localStorage.getItem('ProductoAComprar');
      setInfoProduct(JSON.parse(retrievedUser));
    let retrievedProduct = localStorage.getItem('CuentaUsuario');
      setInfoUser(JSON.parse(retrievedProduct))
    
  }, [])

    const redirect = () => {
      window.location.href = "http://newmarketfront.herokuapp.com/informacion-cliente-pago";
  }
    return (
<div className="contenedor">        
      <h1 className="box-arriba">
        <span>Pon tu Direccion de envio!!</span>
      </h1>
      <div className="box-contenido">

      <div className="box-producto">
      <h1 className="box-arriba">
        <span>El producto que estas comprando es</span>
        </h1>

        <div  className="m-product">
          { infoProduct.length !== 0 ? (
            <>
              <div className="m-product-cont" key={infoProduct.nombre}>
                  <div className="m-product-cont-img"><img src={infoProduct.foto_productos} alt='Imagen 1'/> </div>
                  <div className="m-product-cont-price"><p>$ {numFormat(infoProduct.valor)}</p></div>
                  <div className="m-product-cont-name"><p>{infoProduct.nombre}</p></div>

              </div>
              <div className="box-datos-objeto"><p>{infoProduct.description}</p></div>
              </>

          ) : <div className="loader"></div>}

      </div>
    
        

      </div>


            <div className="info-producto ">
                
                <div className="box-descripcion">
                  <label For="nombre-apellido" className="label"> Nombre y apellido* </label>
                    
                  <input type="text" name="Nombre y apellido" defaultValue={infoUser ? infoUser.nombre : ""}
                  className="textos-input" />

                </div>

                <div className="box-descripciones">
                  <label For="Departamento" className="label"> Departamento*</label>
                    
                  <input type="text" name="Departamento"
                  className="input-departamento" />

                  
                  <label For="Ciudad" className="label"> Ciudad*</label>
                    
                  <input type="text" name="ciudad"
                    className="input-departamento" />
  

                </div>

            </div>
        
                <div className="info-producto">

                  <div className="info-producto2">
                    
                    <div className="box-descripciones">
                      
                    <label For="Tipo de calle" className="label">Tipo de calle</label>

                    <input type="text" className="textos-input"/>

                    
                    <label For="calle" className="label">calle</label>

                    <input type="text" className="textos-input"/>


                    <label For="numero" className="label">Numero</label>

                    <input type="text" className="textos-input" defaultValue="#"/>



                    <input type="text" className="textos-input" defaultValue="-"/>

                    </div>

                </div>


              </div>

              <div className="info-producto">

                <div className="info-producto2">
                  <label htmlFor="telefono">Telefono de contacto</label>

                  <input type="text" className="textos-input"/>
               </div>
              </div>

             


          
              

      </div>

      <div className="box-final">
      <button className="button-1" role="button" onClick={() => redirect()}>Ve a pagar</button>
    </div>
</div>



    );

}

export default InformacionCliente;