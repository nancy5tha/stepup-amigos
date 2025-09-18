
// document.addEventListener("DOMContentLoaded", () => {
//   const masthead = document.getElementById("masthead");
//   const menuBar = document.getElementById("menu-bar");
//   const closeBtn = document.getElementById("menu-close");
//   const overlay = document.querySelector(".bg-overlay");
//   const chevrons = document.querySelectorAll(".chevron");

//   // Open menu
//   menuBar.addEventListener("click", () => {
//     masthead.classList.add("active");
//   });

//   // Close menu (close button or overlay click)
//   [closeBtn, overlay].forEach(el => {
//     el.addEventListener("click", () => {
//       masthead.classList.remove("active");
//       closeAllDropdowns();
//     });
//   });

//   // Toggle dropdowns (accordion style)
//   chevrons.forEach(chevron => {
//     chevron.addEventListener("click", (e) => {
//       e.preventDefault();

//       const parentLi = chevron.closest("li");
//       const dropdown = parentLi.querySelector(".offcanvs-dropdown, .dropdown");

//       if (dropdown) {
//         // Close all other dropdowns first
//         closeAllDropdowns();

//         // Then toggle the clicked one
//         dropdown.classList.toggle("show");
//       }
//     });
//   });

//   // Helper function to close all dropdowns
//   function closeAllDropdowns() {
//     document.querySelectorAll(".offcanvs-dropdown.show, .dropdown.show")
//       .forEach(d => d.classList.remove("show"));
//   }
// });




document.addEventListener("DOMContentLoaded", () => {
  const masthead = document.getElementById("masthead");
  const menuBar = document.getElementById("menu-bar");
  const closeBtn = document.getElementById("menu-close");
  const overlay = document.querySelector(".bg-overlay");
  const chevrons = document.querySelectorAll(".chevron");

  // Open menu
  menuBar.addEventListener("click", () => {
    masthead.classList.add("active");
  });

  // Close menu (close button or overlay click)
  [closeBtn, overlay].forEach(el => {
    el.addEventListener("click", () => {
      masthead.classList.remove("active");
      closeAllDropdowns();
    });
  });

  // Toggle dropdowns (accordion style)
  chevrons.forEach(chevron => {
    chevron.addEventListener("click", (e) => {
      e.preventDefault();

      const parentLi = chevron.closest("li");
      const dropdown = parentLi.querySelector(".offcanvs-dropdown, .dropdown");

      if (dropdown) {
        const isAlreadyOpen = dropdown.classList.contains("show");

        // Close all dropdowns first
        closeAllDropdowns();

        // Toggle the clicked one only if it was not open
        if (!isAlreadyOpen) {
          dropdown.classList.add("show");
        }
      }
    });
  });

  // Helper function to close all dropdowns
  function closeAllDropdowns() {
    document.querySelectorAll(".offcanvs-dropdown.show, .dropdown.show")
      .forEach(d => d.classList.remove("show"));
  }
});

