import React, {useState, useEffect} from "react";
import './informacion-cliente-pago.scss'
import { AiFillCreditCard } from "react-icons/ai";
import TarjetaCredito from "../../../assets/tarjetacredito.png"
import { numFormat } from "../../../utils/formatjsons";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const InformacionPago = () => {
    const [infoUser, setInfoUser] = useState({})
  const [infoProduct, setInfoProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [exito, setExito] = useState(false)
  const  [open, setOpen]  = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [referenciaFactura,setReferenciaFactura] = useState(0)

  //console.log(infoProduct)
  //console.log(infoProductinfoUser)

  console.log(loading)
  const redirect = () => {
    window.location.href = "http://localhost:3000";
}

  useEffect(() => {
    let retrievedUser = localStorage.getItem('ProductoAComprar');
      setInfoProduct(JSON.parse(retrievedUser));
    let retrievedProduct = localStorage.getItem('CuentaUsuario');
      setInfoUser(JSON.parse(retrievedProduct))
    
  }, [])

  const  Envio_Pago = 
        {
          "producto": infoProduct,
          "usuario": infoUser
        }

console.log(Envio_Pago)
        const ComprarProducto = async  () => {
            try {
                setLoading(true);
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(Envio_Pago)
                };
                const response = await fetch('http://34.70.126.150/buy/productos/', requestOptions);
                const data = await response.json();
                console.log(response.status);
                if (response.status === 200){
                    setReferenciaFactura(data)
                    setExito(1)
                    setLoading(false)
                    handleOpen()
                }  else {
                    setExito(2)
                    setLoading(false)
                    handleOpen()
                }
            }
            catch  (err) {
                console.error(err)
            }
        }

    const readyProduct = () =>  {
        setLoading(true);
        setTimeout(ComprarProducto, 5000)
        
    }



    return (
        <>

        <div className="o-informacion">
            <div className="o-informacion-pago">

                <div className="o-informacion-pago-metodo">
                    <h2 className="o-informacion-pago-titulo">¿Cómo quieres pagar?</h2>

                    <div className="o-informacion-pago-metodo-cont">

                        <div className="o-informacion-pago-metodo-cont-icon">
                            <AiFillCreditCard  className='icon-card'/>
                        </div>
                        <p className="textico-cred">Nueva tarjeta  de débito</p>
                        <div className="o-informacion-pago-metodo-cont-opcion"><p>Modificar</p></div>
                    </div>

                </div>

                <div className="o-informacion-pago-tarjetainfo">
                    <h2 className="o-informacion-pago-titulo">Ingresa una nueva tarjeta</h2>

                    <div className="o-informacion-pago-tarjetainfo-cont">
                        <div>
                        <div className="o-informacion-pago-tarjetainfo-cont-input">
                            <input type="text"  className="textos-input-compra" placeholder="Número de tarjeta"/>
                        </div>

                        <div className="o-informacion-pago-tarjetainfo-cont-input">
                            
                    
                            <input type="text"  className="textos-input-compra" placeholder="Nombre y apellido"/>

                        </div>

                        <div className="o-informacion-pago-tarjetainfo-cont-input">
                            <div className="o-informacion-pago-tarjetainfo-cont-input-expiration">
                            <input type="number"  className="textos-input-compra-numero" placeholder="MM"/>
                            <input type="number"  className="textos-input-compra-numero" placeholder="AA"/>
                            </div>
                            <input type="number" className="textos-input-compra" placeholder="Codigo de Seguridad"/>

                        </div>

                        

                        <div className="o-informacion-pago-tarjetainfo-cont-input">
                        <select name="select"  className ="select">
                            <option value="1" >CC</option>
                            <option value="2" >NIT</option>
                        </select>
                        <input type="text" name="Nombre y apellido" className="textos-input-compra" placeholder="Numero de identificacion"/>

                        </div>

                        </div>
                        
                        <div className="o-informacion-pago-ImagenEjemplo"> <img src={TarjetaCredito} /></div>

                        

                    </div>
                    <div className="o-informacion-pago-tarjetainfo-button"> <button className="button-1" onClick={() =>  readyProduct()}>Pagar!</button></div>
                </div>

            </div>


            <div  className="o-informacion-producto">

                <div className="o-informacion-producto-info">
                { infoProduct.length !== 0 ? (
            <>
            <h2 className="o-informacion-pago-titulo">Estas Comprando</h2>
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

            {loading && <div className="loading"> <div className="loadering"></div></div>}
        </div>



        <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
	    <Box className='modal-box-style'>
            
            <div  className="modal-title" >
            {exito  === 1 ? "Compra Realizada con Exito." : exito === 2 ?  "Hubo un error en la compra" : "" }
            </div>
            <p>Muchas Gracias por Usar nuestro servicio.</p>
            {referenciaFactura ? (<p>Referencia de Factura {referenciaFactura.factura_id}  </p>) : ""}

            <div className="o-informacion-pago-tarjetainfo-button"> <button className="button-1" onClick={() => redirect()}>Volver a Inicio</button></div>
            
          </Box> 
          
        </Modal>
      </div>
                </>
    );
}
export default InformacionPago;