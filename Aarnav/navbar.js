// Load navbar.html into any <div id="navbar"></div>
document.addEventListener("DOMContentLoaded", function() {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Highlight active link automatically
      const links = document.querySelectorAll(".nav-link");
      links.forEach(link => {
        if (link.getAttribute("href") === location.pathname.split("/").pop()) {
          link.classList.add("active");
        }
      });
    });
});
