    var navMain = document.querySelector('.menu');
    var navToggle = document.querySelector('.burger');

    navMain.classList.add('menu--closed');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('menu--closed')) {
        navMain.classList.remove('menu--closed');
      } else {
        navMain.classList.add('menu--closed');
      }
    });
