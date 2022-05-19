import React, { useState, useEffect } from "react";
import './productos.scss'
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

const ProductosComponente = (props) => {

  const  listaImagenes = [ ejemplo2, ejemplo3, ejemplo4, ejemplo5, ejemplo6, ejemplo7, ejemplo8, ejemplo9,
    ejemplo10,  ejemplo11, ejemplo12, ejemplo13, ejemplo14, ejemplo15, ejemplo16, ejemplo17, ejemplo18, ejemplo19, ejemplo20, ejemplo21]

  const [productos, setProductos] = useState([])

  useEffect(() => {
    async function fetchCategoriesJSON() {
      const response = await fetch('http://34.70.126.150/productos/');
      let movies = await response.json();
      movies = movies.sort(() => Math.random() - 0.5)
      let  cuttedProducts = movies
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

    return (


        <Productos listaproductos={productos} />


    );
}

export default ProductosComponente;