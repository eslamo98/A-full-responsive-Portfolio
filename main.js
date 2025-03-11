let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let nav = document.querySelector("header nav ");
let header = document.getElementById("header");
let menuIcon = document.querySelector("#menu i");
window.onscroll = function () {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 250;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            document.querySelector("header nav a[href*=" + id + "]")?.classList.add("active");
        }
    })
    // console.log(window.scrollY);
    // console.log("offset", sections[4].offsetTop);
    // console.log("offsetheight", sections[4].offsetHeight);
    header.classList.toggle("bottom-border", window.scrollY > 150);

    // another sol for removing dropdown menu and toggle menu icon to bars when click any link
    // nav.classList.remove("menu-active");
    // menuIcon.classList.add("bx-menu");
    // menuIcon.classList.remove("bx-x");

};

// =============menu icon 
menuIcon.onclick = function () {
    if (this.classList.contains("bx-menu")) {
        this.classList.remove("bx-menu");
        this.classList.add("bx-x");
    } else {
        this.classList.add("bx-menu");
        this.classList.remove("bx-x");
    }
    nav.classList.toggle("menu-active");
}

// remove dropdown menu and toggle menu icon to bars when click any link
navLinks.forEach(link => {
    link.onclick = function () {
        if (nav.classList.contains("menu-active")) {
            nav.classList.remove("menu-active");
            menuIcon.classList.add("bx-menu");
            menuIcon.classList.remove("bx-x");
        }
    }
})


// scroll reavel

ScrollReveal({
    reset: true,
    duration: 2000,
    delay: 200,
    distance: "80px"
});

ScrollReveal().reveal('.home-left-side, h2', { origin: "top" });
ScrollReveal().reveal('h1, .about img', { origin: "left" });
ScrollReveal().reveal('.home p, .about p', { origin: "right" });
ScrollReveal().reveal('.home-right-side, .services-row, .portfolio-grid, form', { origin: "bottom" });


// =================== Type JS =================== //
const typed = new Typed(".multiple-text", {
    strings: ["Fullstack(.Net and Angular)", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    delay: 1000,
    loop: true
});