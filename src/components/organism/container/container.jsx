import React from "react";
import  Header from "../../molecules/header/header";
import Footer from "../../molecules/footer/footer";

const Container = ({ children }) => {
  return (
    <>
      {<Header/>}
      {children}
      {<Footer/>}
    </>
  );
};

export default Container;
