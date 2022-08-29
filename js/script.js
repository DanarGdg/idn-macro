const dropdown = document.querySelector('.dropdown')
const dropdownText = document.querySelector('.dropbtn')
const dropdownContent = document.querySelector('.dropdown-content')
const arrowDropdown = document.querySelector('.arrow-down')
const hamburgerLogo = document.querySelector('.hamburger-logo')
const searchLogo = document.querySelector('.search-logo')
const searchLogoImg = document.querySelector('.search-logo img')
const navbarTextMobile = document.querySelector('.navbar-text-mobile')
const closeLogo = document.querySelector('.close-logo')
const logoWhite = document.querySelector('.logo img:nth-child(1)')
const logoBlack = document.querySelector('.logo img:nth-child(2)')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const navbarText = document.querySelectorAll('.navbar-text li')
const arrowDown = document.querySelector('.arrow-down')

dropdown.addEventListener('click', () => {
    arrowDropdown.classList.toggle("active")
    dropdownContent.classList.toggle("active")
    console.log(detailBlog);
})

hamburgerLogo.addEventListener('click', () => {
    searchLogo.classList.toggle('active')
    navbarTextMobile.classList.toggle('active')
    closeLogo.classList.toggle('active')
    logoWhite.classList.toggle('active')
    logoBlack.classList.toggle('active')
    hamburgerLogo.classList.toggle('active')
    body.style.overflow = 'hidden'
    if(navbarTextMobile.classList.contains('active')){
        logoBlack.src = 'assets/icons/logo-black.svg'
    }else{
        logoBlack.src = 'assets/icons/logo.svg'
    }
})

closeLogo.addEventListener('click', () => {
    searchLogo.classList.toggle('active')
    navbarTextMobile.classList.toggle('active')
    closeLogo.classList.toggle('active')
    logoWhite.classList.toggle('active')
    logoBlack.classList.toggle('active')
    hamburgerLogo.classList.toggle('active')
    body.style.overflow = 'auto'
})

window.addEventListener('scroll', function() {
    nav.classList.toggle('sticky', window.scrollY > 0)
    dropdownText.classList.toggle('sticky', window.scrollY > 0)
    arrowDown.classList.toggle('sticky', window.scrollY > 0)
    searchLogoImg.classList.toggle('sticky', window.scrollY > 0)

    if (dropdownText.classList.contains('sticky')) {
        logoBlack.src = 'assets/icons/logo.svg'
    }else{
        logoBlack.src = 'assets/icons/logo-black.svg'
    }
    navbarText.forEach(text => {
        text.classList.toggle('sticky', window.scrollY > 0)
    })
})

// if id blog1 clicked then show blog1.html
const blog1 = document.querySelector('#blog1');
const blog2 = document.querySelector('#blog2');
const blog3 = document.querySelector('#blog3');

blog1.addEventListener('click', () => {
    window.location.href = 'blog1.html'
})

blog2.addEventListener('click', () => {
    window.location.href = 'blog2.html'
})

blog3.addEventListener('click', () => {
    window.location.href = 'blog3.html'
})
// const body = document.body,
// scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
// height = scrollWrap.getBoundingClientRect().height - 1,
// speed = 0.05;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//     offset += (window.pageYOffset - offset) * speed;

//     var scroll = "translateY(-" + offset + "px) translateZ(0)";
//     scrollWrap.style.transform = scroll;

//     callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();