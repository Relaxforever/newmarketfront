import React, { useState, useEffect } from "react";
import './inventario.scss'



const Inventario = () => {  
  const [nombre, setNombre] =  useState("");
  const [precio, setPrecio] =  useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] =  useState("");
  const [getCategorias, setGetCategorios]  =  useState("");
  const [fileImage,setFileImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  console.log(fileImage)

  const [exito,setExito] = useState(0);
  const [loading,setLoading] = useState(false);

  async function fetchCategoriesJSON() {
    const response = await fetch('http://34.70.126.150/categorias/'/*'http://127.0.0.1:8000/categorias/'*/);
    const movies = await response.json();
    setGetCategorios(movies);
    return movies;
  }

  /*async function fetchCategoriesImagen() {
    const response = await fetch('http://127.0.0.1:8000/imagen/ejemplo1.jpg');
    const movies = await response;
    console.log(movies.url)
    setPreviewImage(movies)
    return movies;
  }*/

  //console.log("El nombre del  producto ", nombre)
 // console.log("Precio del producto", precio)
  useEffect(() => {
    fetchCategoriesJSON();
    /*fetchCategoriesImagen();*/
    
  }, [])



  const handleSubmission = () => {

		const formData = new FormData();
    formData.append('image', fileImage);
		fetch(/*'http://127.0.0.1:8000/imagen/'*/'http://34.70.126.150/imagen/',
			{

				method: 'POST',

				body: formData,

			}
		)
			.then((response) => response.json())
			.then((result) => {
        CreateProduct()
				console.log('Success:', result);

			})

			.catch((error) => {

				console.error('Error:', error);

			});

	};




  var retrievedObject = localStorage.getItem('CuentaUsuario');
  
  const  Envio_Objeto = 
        {
          "producto": {
            "nombre": nombre,
             "valor": parseInt(precio),
           "foto_productos": fileImage ? { "nombre": fileImage.name } : "",
           "description": descripcion
       },
       "usuario": JSON.parse(retrievedObject),
       "categoria": {
           "id": parseInt(categoria),
       }
        }

        const CreateProduct = async  () => {
          try {
              setLoading(true);
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(Envio_Objeto)
              };
              const response = await fetch('http://34.70.126.150/productos/'/*'http://127.0.0.1:8000/productos/'*/, requestOptions);
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


        console.log(Envio_Objeto)


  return (
<div className="contenedor">        
      <h1 className="box-inicio">
        <span>Publica tu producto</span>
      </h1>

      <div className="box-contenido">
        <h2 className="titulo-categoria">
          <span>Selecciona la categoria</span>

        </h2>

        
        <select name="select" onChange={(e) => setCategoria(e.target.value)} className ="select">
              <option value="Selecciona una opción" >Selecciona una opción</option>
              { getCategorias ? getCategorias.map((element) => <option key={element.id} value={element.id}>{element.nombre}</option>) : ""}

              </select>

              <div className="info-producto ">
                
                <div className="info-producto2">
                  <h2>Incluye algunos detalles</h2>
                </div>

                <div className="box-descripciones">
                  <label For="Nombre del producto" className="label"> Titulo del producto* </label>
                    
                  <input type="text" name="Nombre del producto" onChange={(e) => setNombre(e.target.value)}
                  className="textos-input" />

                </div>

                <div className="box-descripciones">
                  <label For="Descripcion" className="label"> Descripcion*</label>
                    
                  <input type="text" name="Descripcion" onChange={(e) => setDescripcion(e.target.value)}
                  className="input-descripcion" />

                </div>

                  </div>
        
                <div className="info-producto">

                  <div className="info-producto2">
                    <h2>Fija un precio</h2>
                    <div className="box-descripciones">
                      
                    <label For="Precio" className="label">Precio*</label>

                    <input type="number" className="textos-input precio-input" onChange={(e) => setPrecio(e.target.value)}/>

                    </div>

                </div>


              </div>

              <div className="info-producto">

                <div className="info-producto2">
                  <h2>Sube imagen del producto</h2>
               </div>

                <input type="file" className="archivos" onChange={(e) => setFileImage(e.target.files[0])}/>

                {/*previewImage ? <img src={previewImage.url}/> : "" */}


              </div>

             


          
              

      </div>

      <div className="box-final">

        <button className="button-1"  onClick={() => handleSubmission() /*CreateProduct()*/}>Publicar producto</button>

        {loading === 1 ? <div className="loader"></div> : '' }
    {exito === 1 ? <div className="messagecuenta">Producto Creado con Exito</div> : '' }
    {exito === 2 ? <div className="messagecuenta">Ocurrio un error en la creacion de la cuenta</div> : '' }

    </div>
    
</div>


  );

  }

  export default Inventario;
 