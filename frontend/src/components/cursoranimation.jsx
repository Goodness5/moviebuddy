import React, { useEffect } from "react";

const Cursoranimation = () => {

  useEffect(() => {
    const rjsCursor = document.getElementById('rjs_cursor');
  
    if (rjsCursor) {
      const showCursor = (e) => {
        if (rjsCursor.classList.contains('rjs_cursor_hidden')) {
          rjsCursor.classList.remove('rjs_cursor_hidden');
        }
        rjsCursor.classList.add('rjs_cursor_visible');
      };
  
      const handleMouseMove = (e) => {
        showCursor();
  
        const cursorWidth = rjsCursor.offsetWidth * 0.5;
        const cursorHeight = rjsCursor.offsetHeight * 0.5;
  
        const cursorX = e.clientX - cursorWidth;
        const cursorY = e.clientY - cursorHeight;
        const cursorPos = `translate(${cursorX}px, ${cursorY}px)`;
        rjsCursor.style.transform = cursorPos;
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);  

  return (
    <div id="rjs_cursor" className="rjs-cursor">
      <div className="rjs-cursor-icon"></div>
    </div>
  )
}

export default Cursoranimation;