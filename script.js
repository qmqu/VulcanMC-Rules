// ===============================
// Vulcan Network
// script.js
// ===============================

// Acordeones
document.querySelectorAll(".accordion").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        // Cierra las demás tarjetas
        document.querySelectorAll(".card").forEach(item => {
            if (item !== card) {
                item.classList.remove("active");
            }
        });

        // Abre o cierra la seleccionada
        card.classList.toggle("active");

    });

});

// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".rule-section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// Resaltar el enlace activo del menú
const sections = document.querySelectorAll(".rule-section");
const links = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        if (scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});

// Scroll suave para el botón principal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        });

    });

});

// Navbar transparente al inicio
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        nav.style.background = "rgba(12,12,15,.90)";
        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        nav.style.background = "rgba(12,12,15,.65)";
        nav.style.boxShadow = "none";

    }

});