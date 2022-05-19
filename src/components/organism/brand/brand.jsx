import React from "react";
import './brand.scss'
import marca1 from "../../../assets/BlowUp.png"
import marca2 from "../../../assets/Ch.jpg"
import marca3 from "../../../assets/Ckn.PNG"
import marca4 from "../../../assets/Lacoste.jpg"
import Marcas from "../../molecules/brands/brands"
const Brand = () => {

  const ejemplo = [
    {
      img: marca1,
      name: "BlowUp",
      redirect: "https://blowup.online/es"
    },
    {
      img: marca2,
      name: "Carolina Herrera",
      redirect: "https://www.carolinaherrera.com/ww/es/"
    },
    {
      img: marca3,
      name: "Calvin Klein",
      redirect: "https://www.calvinklein.co/"
    },

    {
      img: marca4,
      name: "Lacoste",
      redirect: "https://global.lacoste.com/en/homepage"
    },
  ]



    return (
      <>
      <div  className="m-brand">
        
      </div>

      <Marcas listamarcas={ejemplo} />


      </>
    );
  }

  export default Brand;