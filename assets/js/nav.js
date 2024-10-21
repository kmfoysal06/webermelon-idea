const navIcon = document.querySelector(".nav-icon"),
navMenu = document.querySelector('.header-nav');
navIcon.addEventListener("click",function(e){
    e.preventDefault();
    const nav = e.target.parentNode.querySelector('nav');
    nav.classList.toggle('show');
})