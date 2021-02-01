let hovered = false;

function showGif(prop, size) {
  let randomGif = Math.floor((Math.random() * 5 + 1));
  $(".img_logo").attr("src", "images/logo-anim-" + randomGif + ".gif").css(prop, size);
}

$(function() {
  $(".img_logo")
    .mouseover(function() {
      if (!hovered) {
        showGif("width", "6rem");
        hovered = true;
      }

    })
    .mouseout(function() {
      $(this).attr("src", "images/logo.png").css("width", "4.5rem");
      hovered = false;
    });
});
