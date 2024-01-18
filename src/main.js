document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function () {
    let activeSection = "";

    sections.forEach(section => {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
        activeSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.parentNode.classList.remove("navbar--active");

        if (link.getAttribute("href").slice(1) === activeSection) {
        link.parentNode.classList.add("navbar--active");
        }
    });
    });
});

$(document).ready(function () {
    $(".carousel").carousel({
    interval: 5000,
    pause: false
    });
});
