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

const blog1 = document.querySelector('#blog1');
const blog2 = document.querySelector('#blog2');
const blog3 = document.querySelector('#blog3');
const blog4 = document.querySelector('#blog4');
const blog5 = document.querySelector('#blog5');
const blog6 = document.querySelector('#blog6');

blog1.addEventListener('click', () => {
    window.location.href = 'blog1.html'
})

blog2.addEventListener('click', () => {
    window.location.href = 'blog2.html'
})

blog3.addEventListener('click', () => {
    window.location.href = 'blog3.html'
})

blog4.addEventListener('click', () => {
    window.location.href = 'blog4.html'
})

blog5.addEventListener('click', () => {
    window.location.href = 'blog5.html'
})

blog6.addEventListener('click', () => {
    window.location.href = 'blog6.html'
})

const back = document.querySelector('.back')
back.addEventListener('click', () => {
    console.log('back');
})

function backToHome(){
    window.location.href = 'index.html'
}