import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/home.css';

// define variables and functions outside the component
const rjs_cursor =  document.getElementById("rjs_cursor");  
function rjs_show_cursor(e) { 
  if(rjs_cursor.classList.contains('rjs_cursor_hidden')) {
    rjs_cursor.classList.remove('rjs_cursor_hidden');
  }
  rjs_cursor.classList.add('rjs_cursor_visible');
}

function rjs_mousemove(e) { 
  rjs_show_cursor();

  const rjs_cursor_width = rjs_cursor.offsetWidth * 0.5;
  const rjs_cursor_height = rjs_cursor.offsetHeight * 0.5;

  const rjs_cursor_x = e.clientX - rjs_cursor_width;
  const rjs_cursor_y = e.clientY - rjs_cursor_height;
  const rjs_cursor_pos = `translate(${rjs_cursor_x}px, ${rjs_cursor_y}px)`;
  rjs_cursor.style.transform = rjs_cursor_pos;
}

class Home extends Component {
  componentDidMount() {
    // add event listener to window inside componentDidMount
    window.addEventListener('mousemove', rjs_mousemove);
  }

  render() {
    return (
      <div>
        {/* add the meta tags and script tag to index.html */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>books&amp;movies</title>
        <link rel="stylesheet" href="{% static 'accounts/index.css' %}" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script src="{%static 'accounts/index.js'%}"></script>
          <div id="rjs_cursor" className="rjs-cursor">
            <div className="rjs-cursor-icon"></div>
          </div>

          <div className="container">
            <div className="head">
              <object className="headsvg" type="image/svg+xml" data="{% static 'accounts/topstar.svg' %}"></object>
            </div>

            <div className="header">
              <h1>Books &amp; Movies</h1>
              <div className="children">
                <a href="#">
                  <p>Recommend Books</p>
                  <img className="arrow" src="{% static 'accounts/arrow.svg'%}" alt="" />
                </a>
                <a href="#">
                  <p>Recommend Movies</p>
                  <img className="arrow" src="{% static 'accounts/arrow.svg'%}" alt="" />
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
                <div class="line"></div>
              </div>
        
              
        
              
            </div>
        
        
        
            {/* <!-- BODY PART --> */}
        
        
            <div class="body">
                <div class="quest">
                    <span class="group">
                        <h1>Trending Films?</h1>
                        <a href="#">Find them all here</a>
                        </span>
                </div>
        
                <div class="movieseg">
                    <div class="movie1"></div>
                    <div class="movie2"></div>
                    <p>Based on views and ratings, these movies are going to worth your time.</p>
                </div>
        
        
                <div class="quest2">
                    <span class="group">
                    <h1>Books</h1>
                    <a href="#">Find them all here</a>
                    </span>
                </div>
                <div class="navigation">
                    <div class="line"></div>
                    <div class="navtexts">
                        <a href="#"><p>Anime.</p></a>
                        <a href="#"><p>Comedy.</p></a>
                        <a href="#"><p>Korean Series.</p></a>
                        <a href="#"><p>Movies</p></a>
                        <a href="#"><p>Horror.</p></a>
                        <a href="#"><p>Sci-Fi.</p></a>
                        <a href="#"><p>Romance.</p></a>
                    </div>
                    <div class="line"></div>
                  </div>
            </div>
        
        </div>
        
        
        
        
    </div>
    );
    }
  }
  
  export default Home;