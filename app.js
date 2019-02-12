const logo = document.querySelector("#header-img");

// Scroll to the top of the page
logo.addEventListener('click', (event) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});