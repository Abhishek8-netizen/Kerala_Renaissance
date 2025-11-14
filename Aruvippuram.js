function showTitle() {
    let mainHeading = document.getElementById("homepageImage").querySelector("h1");
    mainHeading.style.opacity = 1;
}

function showNavBar(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navElement.style.opacity = 0;
        }
        else {
            navElement.style.opacity = 1;
        }
    })
}

let navElement = document.querySelector("nav");
let container = document.getElementById("homepageImage");

let observerHomepage = new IntersectionObserver(showNavBar, { threshold: 0.5 });
observerHomepage.observe(container);