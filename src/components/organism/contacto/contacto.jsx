import React from "react";
import './contacto.scss'

const ContactoComponente = () => {
    return(

        <div id = "contenido-Paginas">
            <div id = "centro">
                <h2>
                    <em className="encabezados t1">Nuestros</em>
                    <em className="encabezados t2">Clientes</em>
                </h2>
                <p className="descripcion-pagina">
                    Para New Market es muy importante escuchar a nuestros Clientes
                    para asi mejorar nuestro servicio aun mas 
                </p>
                <hr />

                <div id ="contenido-nosotros">
                    <div id="izquierda">
                        <p className="descripcion pagina texto-contacto">
                        Si deseas mas informacion sobre nuestros servicios puedes
                        contactarte en el siguiente Telefono, Email o escribir un mensaje <br />       
                    telefono: <strong>319607146</strong> <br />
                    email: <strong><a href="emailto: jahenaod@eafit.edu.co">
                        newmarket@gmail.com
                    </a> </strong>
                        </p>
                    </div>

                    <div id="derecha"></div>

                        <form action="#" method="POST">
                            <input type="text" name="nombre" placeholder="ingresa tu nombre" className="nombre-mensaje" />
                            <br />

                            <input type="email" name="correo" placeholder="ingresa tu correo" className="email-asunto" />

                            <input type="text" name="asunto" placeholder="ingresa el asunto" className="email-asunto" />
                            <br />

                            <textarea name="mensaje" placeholder="Ingrese su mensaje" className="nombre-mensaje"></textarea> <br />

                            <input type="submit" name="enviar" value= "enviar consulta" className="boton"/>
                        </form>
                       
                
                </div>



            </div>

        </div>


        
    );
}

export default ContactoComponente;