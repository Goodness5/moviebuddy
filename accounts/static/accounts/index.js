$(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 0) {
      $(".navtexts a").addClass("start-scroll");
    } else {
      $(".navtexts a").removeClass("start-scroll");
    }
  });


  // mousehover animation 

  var rjs_cursor =  document.getElementById("rjs_cursor")

  function rjs_show_cursor(e) { //Function to show/hide the cursor
 
    if(rjs_cursor.classList.contains('rjs_cursor_hidden')) {
        rjs_cursor.classList.remove('rjs_cursor_hidden');
    }
 
    rjs_cursor.classList.add('rjs_cursor_visible');
 
}
function rjs_mousemove(e) { //Function to correctly position the cursor
  rjs_show_cursor(); //Toggle show/hide

  var rjs_cursor_width = rjs_cursor.offsetWidth * 0.5; //The actual cursor is in the centre of the custom cursor
  var rjs_cursor_height = rjs_cursor.offsetHeight * 0.5;

  var rjs_cursor_x = e.clientX - rjs_cursor_width; //x-coordinate
  var rjs_cursor_y = e.clientY - rjs_cursor_height; //y-coordinate
  var rjs_cursor_pos = `translate(${rjs_cursor_x}px, ${rjs_cursor_y}px)`;
  rjs_cursor.style.transform = rjs_cursor_pos;
}
window.addEventListener('mousemove', rjs_mouse); //Attach an event listener
//end
