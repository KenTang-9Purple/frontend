const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// add date
const date = document.getElementById("footer_date");
date.innerHTML = new Date().getFullYear();