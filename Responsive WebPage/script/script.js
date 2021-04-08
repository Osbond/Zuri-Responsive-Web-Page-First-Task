let hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', show);


function show() {
    let navLink = document.querySelector('.nav-links');
    navLink.classList.toggle('toggle');
}

