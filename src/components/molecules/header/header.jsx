import React, { useEffect } from "react";
import './header.scss'
import { Link } from "react-router-dom";
import BasicModal from  "../modal-generic/modal"
import imagenHeader from "../../../assets/imagen-corporativa.png"


const Header = () => {
  const [open, setOpen] = React.useState(false);
  const  [userActive, setUserActive] = React.useState({});

  useEffect(() => {
  const retrievedObject = localStorage.getItem('CuentaUsuario')
  //console.log(retrievedObject)
  if (retrievedObject){
    setUserActive(JSON.parse(retrievedObject));
  //  console.log(JSON.parse(retrievedObject))
  }
  },[open])

  const closeUser = () => {
    localStorage.removeItem('CuentaUsuario');
    setUserActive({});
  }
  
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <header className="m-header">
            <div className="m-header-main">
                <div  className="m-header-main-title"> <div className="m-header-main-title-logo"><img src={imagenHeader} alt="logo-corporativo" /> </div> </div>
                <div className="m-header-main-nav">
                   <div className='m-header-main-nav-reroute'><Link className='link-router' to='/' >Home</Link></div>
                   <div className='m-header-main-nav-reroute'><Link className='link-router' to='/productos'>Productos</Link></div>
                   <div className='m-header-main-nav-reroute'><Link className='link-router' to='/marcas'>Marcas</Link></div>
                   <div className='m-header-main-nav-reroute'><Link className='link-router'  to='/inventario'>Inventario</Link></div>
                   <div className='m-header-main-nav-reroute'><Link className='link-router' to='/contacto'>Contacto</Link></div>
                   {Object.keys(userActive).length === 0 && userActive.constructor === Object ?
                    <div  className='m-header-main-nav-login' onClick={() => {handleOpen()}}> Iniciar Sesion</div> :
                    <>
                    <div  className='m-header-main-nav-user'> Hola {userActive.nombre_usuario}</div>
                    <div  className='m-header-main-nav-login'  onClick={() => {closeUser()}}> Cerrar Sesion</div>
                    </> }
                   
                </div>
            </div>
        </header>
      <BasicModal handleOpen={handleOpen} handleClose={handleClose} open={open}/>
      </>
    );
  };
  
  export default Header;
  