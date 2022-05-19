import React from "react";
import './footer.scss'
import { Link } from "react-router-dom";

const footer = () => {
    return (
        <footer className="m-footer">
            <div className="m-main-footer">
                <div className="container">
                    {/*Columna1*/}
                    <div className="columnas">
                        <h4>NEW MARKET</h4>
                        <ul className="list-unstyled">
                            <li>El E-commerce para pequeñas y medianas empresas :v</li>
                            <li>Colombia</li>
                        </ul>
                    </div>

                    <div className="columnas">
                        <h4>Ir a:</h4>
                        <ui className="list-unstyled">
                        <li className="direccion">
                                <Link className="link" to = '/'>Home</Link>
                            </li>
                            <li className="direccion">
                                <Link className="link" to = '/productos'>Productos</Link>
                            </li>
                            <li className="direccion">
                                <Link className="link" to = '/marcas'>Marcas</Link>
                            </li>
                            <li className="direccion">
                                <Link className="link" to = '/inventario'>Inventario</Link>
                            </li>
                            <li className="direccion">
                                <Link className="link" to = '/contacto'>Contacto</Link>
                            </li>

                        </ui>

                    </div>

                </div>

                <hr className="line" />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().setFullYear} New Market | All rigth reserved | Terms of service | Privacy

                        </p>
                    </div>


            </div>
        </footer>
    

    );
};

export default footer;