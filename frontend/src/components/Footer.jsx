/** @format */

import {
   
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <div className=" bottom-0  w-full overflow-clip mt-40 border-t-2 border-black">
        
  
  
        <div className=" text-white">
         
              <div className="mt-[40px] mx-auto flex justify-center gap-8">
                <a href="https://www.facebook.com/goodnessoluwatemilorun.kolapo" className="">
                  <FaFacebookF className="" size={30}/>
                </a>
                <a href="https://www.twitter.com/goodnesskolapo" className="">
                  <FaTwitter size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/goodness-temilorun" className="">
                  <FaLinkedin size={30} />
                </a>
                <a href="https://instagram.com/goodnessoluwatemilorun" className="">
                  <FaInstagram size={30}/>
                </a>
                <a href="https://youtube.com/@kolapogoodness" className="text-red-700 ">
                  <FaYoutube size={30}/>
                </a>
              </div>
              <div className="mt-[40px] text-white mx-auto flex justify-center gap-8">
                <a href="/" className="">
                  Home
                </a>
                <a href="/" className="">
                  About us
                </a>
                <a href="/" className="">
                 T&C
                </a>
                <a href="/" className="">
                  Privacy policy
                </a>
              
              </div>
           
        
          
        </div>
        <div className="text-[14px] mt-7 text-center pb-4">
          &copy;moviebuddy 2023 All rights reserved
        </div>
      </div>
    );
  };
  
  export default Footer;
  