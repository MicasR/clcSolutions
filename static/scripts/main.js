window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    // Adjust threshold as needed
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetSection = document.getElementById(link.hash.slice(1));
    const offset = targetSection.offsetTop - 44;

    if (targetSection) {
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});

function toggleLinks() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");

  const elements = document.getElementsByClassName("svg-icon");
  for (let element of elements) {
    element.classList.toggle("hidden");
  }
}
