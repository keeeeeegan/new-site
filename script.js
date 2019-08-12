document.addEventListener("DOMContentLoaded", function(event) {
  var mySite = function () {

    var privateMenuVisible = false;
    var privateMenuContainer;
    var privateBodySelector;
    var private_last_known_scroll_pos = 0;
    var private_ticking;
    var privateDocumentHeight;
    var privateStartColor = [241, 241, 241];
    // var privateEndColor = [205, 220, 58];
    var privateEndColor = [255, 246, 255];

    function publicInit() {
      // console.log('init');

      privateMenuContainer = document.querySelector('.menu-overlay');
      privateBodySelector = document.querySelector('body');

      privateDocumentHeight = privateGetDocumentHeight();

      privateMenuClickListener();
      privateScrollListener();
    }

    function privateMenuClickListener() {

      document.addEventListener('click', function (event) {
        if (!event.target.matches('.menu-icon .menu-icon-open')
            && !event.target.matches('.menu-overlay .menu-close-button')) return;

        privateMenuClickHandler(event.target);
      }, false);
    }

    function privateScrollListener() {
      window.addEventListener('scroll', function(event) {
        private_last_known_scroll_pos = window.scrollY;

        if (!private_ticking) {
          window.requestAnimationFrame(function() {
            privateDoScrollThing(private_last_known_scroll_pos);
            private_ticking = false;
          });

          private_ticking = true;
        }
      });
    }

    function privateDoScrollThing(number) {

      //http://javascriptkit.com/javatutors/detect-user-scroll-amount.shtml
      var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
      var docheight = privateGetDocumentHeight()
      var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      var trackLength = docheight - winheight
      var scroll = scrollTop/trackLength;
      var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
      // console.log(scroll);
      // console.log(pctScrolled + '% scrolled');

      // based on percentage calculate new color value;

      // get the difference of each RBG value
      var delta_color_r = privateStartColor[0] - privateEndColor[0];
      var delta_color_g = privateStartColor[1] - privateEndColor[1];
      var delta_color_b = privateStartColor[2] - privateEndColor[2];

      // take original color and add percentage of difference between each value
      var new_color_r = privateStartColor[0] + Math.floor(delta_color_r * scroll);
      var new_color_g = privateStartColor[1] + Math.floor(delta_color_g * scroll);
      var new_color_b = privateStartColor[2] + Math.floor(delta_color_b * scroll);

      var new_color_string = "rgb(" + new_color_r + "," + new_color_g + "," + new_color_b + ")";

      document.querySelector('html').style.background = new_color_string;

    }

    function privateMenuClickHandler(target) {
      //console.log('hey');
      if (!privateMenuVisible) {
        privateMenuVisible = true;
        //console.log('show menu', privateMenuVisible);

        privateShowMenu();
      }
      else {
        privateMenuVisible = false;
        //console.log('hide menu', privateMenuVisible);

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

    function privateGetDocumentHeight() {
      var D = document;
      return Math.max(
          D.body.scrollHeight, D.documentElement.scrollHeight,
          D.body.offsetHeight, D.documentElement.offsetHeight,
          D.body.clientHeight, D.documentElement.clientHeight
      );
    }

    return {
      init: publicInit
    };

  }();

  mySite.init();
});
