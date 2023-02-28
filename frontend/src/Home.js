import React, { useEffect } from 'react'
import topstar from "./images/topstar.svg";
import arrow from "./images/arrow.svg";
import "./home.css"

const Home = () => {
  useEffect(() => {
    const rjs_cursor = document.getElementById("rjs_cursor");
    
    const rjs_show_cursor=(e)=> { 
      if(rjs_cursor.classList.contains('rjs_cursor_hidden')) {
        rjs_cursor.classList.remove('rjs_cursor_hidden');
      }
      rjs_cursor.classList.add('rjs_cursor_visible');
    }
    
    const rjs_mousemove=(e)=> { 
      rjs_show_cursor();
    
      const rjs_cursor_width = rjs_cursor.offsetWidth * 0.5;
      const rjs_cursor_height = rjs_cursor.offsetHeight * 0.5;
    
      const rjs_cursor_x = e.clientX - rjs_cursor_width;
      const rjs_cursor_y = e.clientY - rjs_cursor_height;
      const rjs_cursor_pos = `translate(${rjs_cursor_x}px, ${rjs_cursor_y}px)`;
      rjs_cursor.style.transform = rjs_cursor_pos;
    }

    window.addEventListener('mousemove', rjs_mousemove);

    return () => {
      window.removeEventListener('mousemove', rjs_mousemove);
    };
  }, []);
    return (
        <div>
        {/* add the meta tags and script tag to index.html */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>books&amp;movies</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
         
          <div id="rjs_cursor" className="rjs-cursor">
        <div className="rjs-cursor-icon"></div>
      </div>
          <div className="container">
            <div className="head">
              <object className="headsvg" type="image/svg+xml" data={topstar}></object>
            </div>

            <div className="header">
              <h1>Books &amp; Movies</h1>
              <div className="children">
                <a href="#">
                  <p>Recommend Books</p>
                  <img className="arrow" src={arrow} alt="" />
                </a>
                <a href="#">
                  <p>Recommend Movies</p>
                  <img className="arrow" src={arrow} alt="" />
                </a>
              </div>
              <div className="navigation">
                <div className="line"></div>
                <div className="navtexts">
                  <a href="#"><p>Anime.</p></a>
                  <a href="#"><p>Comedy.</p></a>
                    <a href="#"><p>Korean Series.</p></a>
                    <a href="#"><p>Movies</p></a>
                    <a href="#"><p>Horror.</p></a>
                    <a href="#"><p>Sci-Fi.</p></a>
                    <a href="#"><p>Romance.</p></a>
                </div>
                <div className="line"></div>
              </div>
        
              
        
              
            </div>
        
        
        
            {/* <!-- BODY PART --> */}
        
        
            <div className="body">
                <div className="quest">
                    <span className="group">
                        <h1>Trending Films?</h1>
                        <a href="#">Find them all here</a>
                        </span>
                </div>
        
                <div className="movieseg">
                    <div className="movie1"></div>
                    <div className="movie2"></div>
                    <p>Based on views and ratings, these movies are going to worth your time.</p>
                </div>
        
        
                <div className="quest2">
                    <span className="group">
                    <h1>Books</h1>
                    <a href="#">Find them all here</a>
                    </span>
                </div>
                <div className="navigation">
                    <div className="line"></div>
                    <div className="navtexts">
                        <a href="#"><p>Anime.</p></a>
                        <a href="#"><p>Comedy.</p></a>
                        <a href="#"><p>Korean Series.</p></a>
                        <a href="#"><p>Movies</p></a>
                        <a href="#"><p>Horror.</p></a>
                        <a href="#"><p>Sci-Fi.</p></a>
                        <a href="#"><p>Romance.</p></a>
                    </div>
                    <div className="line"></div>
                  </div>
            </div>
        
        </div>
        
        
        
        
    </div>
    )
}

export default Home
