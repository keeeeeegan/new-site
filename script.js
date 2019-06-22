document.addEventListener("DOMContentLoaded", function(event) {
  var mySite = function () {

    var privateMenuVisible = false;
    var privateMenuContainer;
    var privateBodySelector;

    function publicInit() {
      console.log('init');

      privateMenuContainer = document.querySelector('.menu-overlay');
      privateBodySelector = document.querySelector('body');

      privateMenuClickListener();
    }

    function privateMenuClickListener() {

      document.addEventListener('click', function (event) {
        if (!event.target.matches('.menu-icon .menu-icon-open')
            && !event.target.matches('.menu-overlay .menu-close-button')) return;

        privateMenuClickHandler(event.target);
      }, false);
    }

    function privateMenuClickHandler(target) {
      console.log('hey');
      if (!privateMenuVisible) {
        privateMenuVisible = true;
        console.log('show menu', privateMenuVisible);

        privateShowMenu();
      }
      else {
        privateMenuVisible = false;
        console.log('hide menu', privateMenuVisible);

        privateHideMenu();
      }
    }

    function privateShowMenu() {
      privateMenuContainer.style.display = "block";
      privateBodySelector.classList.add('noscroll');
    }

    function privateHideMenu() {
      privateMenuContainer.style.display = "none";
      privateBodySelector.classList.remove('noscroll');
    }

    return {
      init: publicInit
    };

  }();

  mySite.init();
});
