const nav = document.querySelector('nav');
const navButton = nav.firstElementChild.firstElementChild.nextElementSibling;
const navContent = navButton.previousElementSibling.firstElementChild;

window.addEventListener('load', function () {
    if (screen.width >= 992) {
        navButton.style.display = 'none';//removes the nav button
        navContent.classList.remove('collapse');//shows the nav content by removing the collapse class which is hiding it.
    }
    if (screen.width < 992) {
        navButton.style.display = 'block';
        navContent.classList.add('collapse');
    }

    window.addEventListener('resize', function () {
        if (screen.width >= 992) {
            navButton.style.display = 'none';//removes the nav button
            navContent.classList.remove('collapse');//shows the nav content by removing the collapse class which is hiding it.
        }
        if (screen.width < 992) {
            navButton.style.display = 'block';
            navContent.classList.add('collapse');
        }
    });

});