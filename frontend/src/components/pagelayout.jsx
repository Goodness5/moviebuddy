import React from "react";
import Cursoranimation from './cursoranimation';
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <div className="p-2 bg-black overflow-hidden">
    <div className="bg-blue-300 overflow-hidden">
      <Cursoranimation />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
