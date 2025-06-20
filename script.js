let menuIcon = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");
function iconc() {
  menuIcon.classList.toggle("fa-xmark");
  console.log("icon", menuIcon);
  navbar.classList.toggle("active");
}
let curSelectedNav = document.getElementById("#home");

function onNavItemClick(id) {
  const navItem = document.getElementById(id);
  curSelectedNav?.classList.remove("active");
  curSelectedNav = navItem;
  curSelectedNav.classList.add("active");
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header nav a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, heading", { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

const typed=new Typed('.multiple-text',{
    strings:['Website Developer', ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});