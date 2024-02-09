window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    // Adjust threshold as needed
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

function toggleLinks() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");

  const elements = document.getElementsByClassName("svg-icon");
  for (let element of elements) {
    element.classList.toggle("hidden");
  }

  const linkArea = document.getElementsByClassName("link-area")[0];
  linkArea.classList.toggle("hidden");
  linkArea.classList.toggle("flex");
}

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (
      document.getElementById("navbar").classList.contains("active") &&
      window.innerWidth <= 1024
    ) {
      toggleLinks();
    }

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
