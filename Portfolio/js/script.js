window.addEventListener('load', function () {
    if (window.matchMedia('screen and (max-width: 1200px)').matches) {

        console.log('hello')
    }
    nav = document.querySelector('nav');
    navButton = nav.firstElementChild.firstElementChild.nextElementSibling;
    navContent = navButton.previousElementSibling.firstElementChild;
    console.log(navContent);
    navButton.remove()
    navContent.classList.remove('collapse')
})