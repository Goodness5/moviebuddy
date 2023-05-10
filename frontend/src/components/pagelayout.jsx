import React from "react";
import Cursoranimation from './cursoranimation';
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Cursoranimation />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
