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
    <div id="rjs_cursor" className="rjs-cursor w-1/4 rounded-full hidden overflow-hidden absolute">
      <div className="rjs-cursor-icon overflow-hidden h-80 w-full rounded-full opacity-20 bg-gradient-to-t from-yellow-400 via-[#3b0101] to-[#fff] z-30"></div>
    </div>
  )
}

export default Cursoranimation;
