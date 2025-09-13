
  // const menubar = document.getElementById("menu-bar");
  // const navbar = document.getElementById("navbar-menu");
  // const icon = menubar.querySelector("i");

  // menubar.addEventListener("click", () => {
  //   navbar.classList.toggle("active");

  
  //   if (navbar.classList.contains("active")) {
  //     icon.classList.remove("fa-bars-staggered");
  //     icon.classList.add("fa-xmark");
  //   } else {
  //     icon.classList.remove("fa-xmark");
  //     icon.classList.add("fa-bars-staggered");
  //   }
  // });



document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.getElementById("menu-bar");
  const navbarMenu = document.getElementById("navbar-menu");
  const closeBtn = document.getElementById("menu-close");
  const dropdownLinks = document.querySelectorAll("#navbar-menu .chevron");

  menuBar.addEventListener("click", () => {
    navbarMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });

  document.addEventListener("click", function(e) {
    if (!navbarMenu.contains(e.target) && !menuBar.contains(e.target)) {
      navbarMenu.classList.remove("active");
    }
  });

 
});
