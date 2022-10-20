var nav = document.getElementById("nav");
var content = document.getElementById("hidden-nav-content");

window.onload = () => {
  nav.classList.add("animate_background");
};

window.onresize = () => {
  if (window.innerWidth > 1079) {
    nav.classList.remove("nav_open");
    content.style.display = "none";
  }
};

document.getElementById("menu-button").onclick = () => {
  nav.classList.toggle("nav_open");

  content.style.display == "none"
    ? (content.style.display = "block")
    : setTimeout(() => {
        content.style.display = "none";
      }, 400);
};
