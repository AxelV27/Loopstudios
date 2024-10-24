document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');
    const navList = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
      // Ajouter la classe nav_mobile
      navList.classList.toggle('nav_mobile');

      // Changer la source de l'icône du menu
        if (navList.classList.contains("nav_mobile")) {
            setTimeout(() => {
            menuToggle.src = "./images/icon-close.svg";
            header.style.backgroundImage = "url()";
            header.style.backgroundColor = "black";
            }, 550);
        } else {
            setTimeout(() => {
            menuToggle.src = "./images/icon-hamburger.svg";
            header.style.backgroundImage = "url(./images/mobile/image-hero.jpg)";
            header.style.backgroundColor = "";
            }, 150);
        }
    })
})
