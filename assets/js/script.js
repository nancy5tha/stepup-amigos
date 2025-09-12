
  const menubar = document.getElementById("menu-bar");
  const navbar = document.getElementById("navbar-menu");
  const icon = menubar.querySelector("i");

  menubar.addEventListener("click", () => {
    navbar.classList.toggle("active");

  
    if (navbar.classList.contains("active")) {
      icon.classList.remove("fa-bars-staggered");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars-staggered");
    }
  });

