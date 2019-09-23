document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById("content");
  var toggle  = document.getElementById("content-toggle");

  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    content.classList.toggle("hidden");
  });
});


