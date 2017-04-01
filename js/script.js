    var navMain = document.querySelector('.menu');
    var navToggle = document.querySelector('.burger');

    navMain.classList.add('menu--closed');
    navMain.classList.remove('menu--no-js');
    navToggle.classList.add('burger--closed');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('menu--closed')) {
        navMain.classList.remove('menu--closed');
        navToggle.classList.remove('burger--closed');
      } else {
        navMain.classList.add('menu--closed');
        navToggle.classList.add('burger--closed');
      }
    });
