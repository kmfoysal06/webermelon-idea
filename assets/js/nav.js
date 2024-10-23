const navIcon = document.querySelector(".nav-icon-container"),
navMenu = document.querySelector('.header-nav ul');
navIcon.addEventListener("click",function(e){
    e.preventDefault();
    const ul = (e.target.parentNode.querySelector('ul') === null) ? e.target.parentNode.parentNode.querySelector('ul') : e.target.parentNode.querySelector('ul');
    ul.classList.toggle('show');    
})