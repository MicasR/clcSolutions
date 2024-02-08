window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  console.log(navbar)
  if (window.scrollY > 20) {
    // Adjust threshold as needed
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});
