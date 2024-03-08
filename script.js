if (isMobile()) {
  document.querySelector(".menu-bar").addEventListener("click", function () {
    const nav = document.querySelector(".menu-wrapper");
    if (nav.style.display === "block") {
      nav.style.display = "none"; // If it's visible, hide it
    } else {
      nav.style.display = "block"; // If it's hidden, show it
    }
  });
}

function isMobile() {
  return window.innerWidth <= 768; // Adjust the value as needed
}
