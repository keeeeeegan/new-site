document.addEventListener("DOMContentLoaded", function(event) {
  var mySite = function () {

    var privateMenuVisible = false;
    var privateMenuContainer;

    function publicInit() {
      console.log('init');

      privateMenuContainer = document.querySelector('.menu-overlay');

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
    }

    function privateHideMenu() {
      privateMenuContainer.style.display = "none";
    }

    return {
      init: publicInit
    };

  }();

  mySite.init();
});
