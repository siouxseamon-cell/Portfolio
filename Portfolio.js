/* =========================================================
   LEKAN PETER PORTFOLIO
   One shared JavaScript file for all pages
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE MENU */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    /* DARK / LIGHT MODE */
    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("portfolioTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    if (themeToggle) {
        themeToggle.innerHTML =
            document.body.classList.contains("light-theme")
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");

            const light = document.body.classList.contains("light-theme");

            themeToggle.innerHTML = light
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';

            localStorage.setItem(
                "portfolioTheme",
                light ? "light" : "dark"
            );
        });
    }

    /* SCROLL REVEAL */
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const top = element.getBoundingClientRect().top;

            if (top < windowHeight - 80) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll, { passive: true });
    window.addEventListener("load", revealOnScroll);
    revealOnScroll();

    /* CURRENT YEAR */
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* CONTACT FORM */
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const subject = document.getElementById("subject")?.value.trim();
            const message = document.getElementById("message")?.value.trim();

            if (!name || !email || !subject || !message) {
                formMessage.textContent = "Please fill in all fields.";
                formMessage.style.color = "#f87171";
                return;
            }

            formMessage.textContent =
                "Thank you! Your message has been received.";
            formMessage.style.color = "#34d399";

            contactForm.reset();
        });
    }

    /* ACTIVE PAGE LINK */
    const currentPage = window.location.pathname.split("/").pop() || "home.html";

    document.querySelectorAll(".nav-links a").forEach(link => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#")) return;

        if (href === currentPage) {
            link.classList.add("active");
        }
    });

});