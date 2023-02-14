$(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 0) {
      $(".navtexts a").addClass("start-scroll");
    } else {
      $(".navtexts a").removeClass("start-scroll");
    }
  });