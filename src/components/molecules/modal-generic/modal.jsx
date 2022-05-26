import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./modal.scss"
import {
    useIndependent,
    useChangeIndependent,
  } from "../../../context/independentContext"

export default function BasicModal(props) {

    const independentInfo = useIndependent()
    const changeValues = useChangeIndependent()
    //console.log(changeValues)

    const [registro,setRegistro] = React.useState(false);
    //console.log(independentInfo)

    const [cuenta,setCuenta] = React.useState('')
    const [contra,setContra] = React.useState('')


    const [email,setEmail] = React.useState('')
    const [nombre, setNombre]  = React.useState('');
    const [apellidos, setApellidos] =  React.useState('');
    const [apodo, setApodo] = React.useState(false);
    const [password, setPassword] = React.useState(false);
    const [tipousuario, setTipoUsuario] = React.useState(false);

    const [exito,setExito] = React.useState(0);
    const [loading,setLoading] = React.useState(false);

    const [errorMessage,setErrorMessage] = React.useState('');

    const sendUser = async  () => {
        try {
            setLoading(true);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Envio_Objeto)
            };
            const response = await fetch('http://34.70.126.150/users/', requestOptions);
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
    }


    const LoginUser = async  () => {
        try {
            setLoading(true);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(objetoInicioSesion)
            };
            const response = await fetch('http://34.70.126.150/login/users/'/*'http://127.0.0.1:8000/login/users/'*/, requestOptions);
            const data = await response.json();
            console.log(response.status);
            if (response.status === 400){
                setExito(5)
                setErrorMessage(data.detail)
                setLoading(false)
            } else {
                setExito(0)
                console.log(data)
                props.handleClose();
               // changeValues("User", data)

    // Put the object into storage
    localStorage.setItem('CuentaUsuario', JSON.stringify(data));

        // Retrieve the object from storage
            var retrievedObject = localStorage.getItem('CuentaUsuario');

            console.log('retrievedObject: ', JSON.parse(retrievedObject));
                return data
            }
            
        }
        catch  (err) {
            console.error(err)
        }
    }


    

    
    const  Envio_Objeto = 
        {
            "correo": email,
            "nombre_usuario":nombre,
            "apellidos_usuario": apellidos,
            "apodo_usuario": apodo,
            "password": password,
            "tipo_usuario_id": parseInt(tipousuario)
        }
    //console.log(Envio_Objeto)

    const objetoInicioSesion = {
        "password": contra,
        "correo": cuenta
    }


    return (
      <div>
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            {registro ? <Box className='modal-box-style'>
            
            <div  className="modal-title" >
            ¡Hola! Registrate para empezar a comprar
            </div>
            <div className='modal-Cont'>
            <div className="box-descripciones">
                  <label For="titulo del producto" className="label"> Email <span className="asterisco">*</span>  </label>
                    
                  <input type="text" name="Titulo del producto" onChange={(e) => setEmail(e.target.value)}
                  className="textos-input" required />

                </div>

                <div className="box-descripciones">
                  <label For="titulo del producto" className="label"> Nombre <span className="asterisco">*</span> </label>
                    
                  <input type="text" name="Titulo del producto" onChange={(e) => setNombre(e.target.value)}
                  className="textos-input" required/>

                </div>

                <div className="box-descripciones">
                  <label For="titulo del producto" className="label"> Apellidos <span className="asterisco">*</span> </label>
                    
                  <input type="text" name="Titulo del producto" onChange={(e) => setApellidos(e.target.value)}
                  className="textos-input" required/>

                </div>

                <div className="box-descripciones">
                  <label For="titulo del producto" className="label"> Nombre de usuario <span className="asterisco">*</span> </label>
                    
                  <input type="text" name="Titulo del producto" onChange={(e) => setApodo(e.target.value)}
                  className="textos-input" />

                </div>


                <div className="box-descripciones">
                  <label For="titulo del producto" className="label"> Contraseña <span className="asterisco">*</span> </label>
                    
                  <input type="password" name="Titulo del producto" onChange={(e) => setPassword(e.target.value)}
                  className="textos-input  contra" />

                </div>


                <div className="box-descripciones">
                  <label For="titulo del producto" className="label"> Tipo de Usuario <span className="asterisco">*</span> </label>
                    
                  <select name="select" onChange={(e) => setTipoUsuario(e.target.value)} className ="select">
              <option value="Selecciona una opción" >Selecciona una opción</option>
              <option value="1" >Vendedor</option>
              <option value="2" >Comprador</option>
              </select>

                </div>

                
                

                <div className="contenedor-boton">
                <button class="button-1" role="button"   onClick={() => sendUser()}   >Crear Cuenta</button>
                </div>

                 {loading === 1 ? <div className="loader"></div> : '' }
                 {exito === 1 ? <div className="messagecuenta">Cuenta Creada con Exito</div> : '' }
                 {exito === 2 ? <div className="messagecuenta">Ocurrio un error en la creacion de la cuenta</div> : '' }
                
                <div className="registrate"><p>¿Ya tienes cuenta? <span  className="registro-link" onClick={() => setRegistro(false)}>Inicia Sesión</span></p></div>
            </div>
            
          </Box>  
          :
           <Box className='modal-box-style'>
            
            <div  className="modal-title" >
            ¡Hola! Ingresa tu e‑mail y contraseña 
            </div>
            <div className='modal-Cont'>
            <div className="box-descripciones">
                  <label For="titulo del producto" className="label"> Email <span className="asterisco">*</span>  </label>
                    
                  <input type="text" name="Titulo del producto" onChange={(e) => setCuenta(e.target.value)}
                  className="textos-input" />

                </div>
                <div className="box-descripciones">
                  <label For="titulo del producto" className="label"> Contraseña <span className="asterisco">*</span> </label>
                    
                  <input type="password" name="Titulo del producto" onChange={(e) => setContra(e.target.value)}
                  className="textos-input contra" />

                </div>
                <div className="contenedor-boton">
                <button className="button-1" role="button" onClick={() => LoginUser()}>Iniciar Sesión</button>

                

                
                </div>
                {exito === 5 ? <div className="messagecuenta">{errorMessage}</div> : '' }
                
                <div className="registrate"><p>¿Aún no tienes una cuenta? <span  className="registro-link" onClick={() => setRegistro(true)}>Registrate</span></p></div>

                    
            </div>
            
          </Box> }
          
        </Modal>
      </div>
    );
  }