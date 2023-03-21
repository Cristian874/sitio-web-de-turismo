

/* swipper */
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  /* js  de la seccion de especial */
  const enlaces = document.querySelectorAll('.especial__enlace');
  const grid = document.querySelector('.especial__grid');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault();
      const id = enlace.getAttribute('href').substring(1);
      enlaces.forEach(enlace => enlace.classList.remove('activo'));
      enlace.classList.add('activo');
      grid.querySelectorAll('.especial__card').forEach(card => {
        if (card.getAttribute('id') === id || id === 'producto') {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });



  //imagen
const imagen = document.getElementById("header__logo");
window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    imagen.src = "build/img/logo.png";
  } 

  else {
  imagen.src = "build/img/logo.png";
    }
});


//barra fija

function navegacionFija(){

  window.addEventListener("scroll", function(){
    //leemos el scroll y agregamos las clases a los elementos 
    header = document.querySelector(".header__contenido");
     header.classList.toggle("abajo",window.scrollY > 0);


      

}); 

}

//navegacion
let previousPosition = window.pageYOffset;

window.onscroll = function() {
  let currentPosition = window.pageYOffset;

  if (currentPosition <= 1) {
    // El usuario ha regresado a la parte superior de la página
    const navLinks = document.querySelectorAll('.navegacion__link');

    navLinks.forEach(link => {
      link.classList.remove('link');
    });
  } else if (previousPosition > currentPosition) {
    // El usuario está haciendo scroll hacia arriba
    const navLinks = document.querySelectorAll('.navegacion__link');

    navLinks.forEach(link => {
      link.classList.add('link');
    });
  } else {
    // El usuario está haciendo scroll hacia abajo
    const navLinks = document.querySelectorAll('.navegacion__link');

    navLinks.forEach(link => {
      link.classList.add('link');
    });
  }

  previousPosition = currentPosition;
};

navegacionFija();


 /* menu reposive */
 $(document).ready(function(){
  $(".header__menu").on("click",function(){




      $("nav").slideToggle();
      })





})