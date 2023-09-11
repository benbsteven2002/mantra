// Function to toggle the navigation menu for mobile screens
function toggleMenu() {
    var navList = document.querySelector('.nav-container');
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
}

// Add click event listener to the menu toggle icon
var menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

// Add click event listener to the "CLOSE" link
var closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', toggleMenu);


// Get the current page URL
const currentPageUrl = window.location.href;

// Check the current page URL and apply the .active class accordingly
if (currentPageUrl.includes("index.html")) {
    document.getElementById("welcome-link-desktop").classList.add("active");
    document.getElementById("welcome-link-mobile").classList.add("active");
} else if (currentPageUrl.includes("menu.html")) {
    document.getElementById("menu-link-desktop").classList.add("active");
    document.getElementById("menu-link-mobile").classList.add("active");
} else if (currentPageUrl.includes("reservations.html")) {
    document.getElementById("booking-link-desktop").classList.add("active");
    document.getElementById("booking-link-mobile").classList.add("active");
} else if (currentPageUrl.includes("contact.html")) {
    document.getElementById("contact-link-desktop").classList.add("active");
    document.getElementById("contact-link-mobile").classList.add("active");
} else if (currentPageUrl.includes("gallery.html")) {
    document.getElementById("gallery-link-desktop").classList.add("active");
    document.getElementById("gallery-link-mobile").classList.add("active");
}
// Add the case for being just / nothing
// if (currentPageUrl.includes(currentPageUrl)) {
//     document.getElementById("welcome-link-desktop").classList.add("active");
//     document.getElementById("welcome-link-mobile").classList.add("active");
// }