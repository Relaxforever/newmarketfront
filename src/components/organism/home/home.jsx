import React, { useState, useEffect } from "react";
import './home.scss'
import Productos from "../../molecules/products/products"
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
import ejemplo17 from "../../../assets/ejemplo11.jpg"
import ejemplo18 from "../../../assets/ejemplo11.jpg"
import ejemplo19 from "../../../assets/ejemplo11.jpg"
import ejemplo20 from "../../../assets/ejemplo11.jpg"
import ejemplo21 from "../../../assets/ejemplo11.jpg"
const Home = () => {

  const  listaImagenes = [ ejemplo2, ejemplo3, ejemplo4, ejemplo5, ejemplo6, ejemplo7, ejemplo8, ejemplo9,
     ejemplo10,  ejemplo11, ejemplo12, ejemplo13, ejemplo14, ejemplo15, ejemplo16, ejemplo17, ejemplo18, ejemplo19, ejemplo20, ejemplo21]

  const [productos, setProductos] = useState([])



  

  useEffect(() => {
    async function fetchCategoriesJSON() {
      const response = await fetch('http://34.70.126.150/productos/');
      let movies = await response.json();
      movies = movies.sort(() => Math.random() - 0.5)
      let  cuttedProducts = movies.slice(0, 4)
      let productImages = []
      for (let i = 0; i < cuttedProducts.length; i++) { 
        let newProduct = cuttedProducts[i]
        //console.log(newProduct)
        newProduct.foto_productos = listaImagenes[Math.floor(Math.random() * 10) + 1]
        productImages.push(cuttedProducts[i]);
      }
      console.log(productImages)
      setProductos(productImages);
      return movies;
    }
    fetchCategoriesJSON()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


/*
  const ejemplo = [
    {
      img:   listaImagenes[Math.floor(Math.random() * 11) + 1],
      name: "Camisas 1",
      precio: 64000,
    },
    {
      img: listaImagenes[Math.floor(Math.random() * 11) + 1],
      name: "Camisa 2",
      precio: 46000,
    },
    {
      img: listaImagenes[Math.floor(Math.random() * 11) + 1],
      name: "ejemplo2",
      precio: 53000,
    },

    {
      img: listaImagenes[Math.floor(Math.random() * 11) + 1],
      name: "ejemplo5",
      precio: 63000,
    },
  ]
*/


    return (
      <>
      <div  className="m-home">
        <div className="m-home-images">
          <div className="m-home-images-first">
            <img src={ejemplo6} alt='Imagen 1'/>
          </div>
          <div className="m-home-images-second">
          <img src={ejemplo4} alt='Imagen 2'/>
            </div> 
          </div>

          <div className="m-home-popup"><p>Productos de Hoy!</p></div>
      </div>

      <Productos listaproductos={productos} />


      </>
    );
  }

  export default Home;