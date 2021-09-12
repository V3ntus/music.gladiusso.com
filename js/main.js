// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function onPageLoadHandler() {
  document.body.style.overflow = 'hidden';
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  };
  if (window.location.href.indexOf("mywork") > -1) {
    $("#nav-i1").fadeIn(700);
    $("#nav-i2").fadeIn(1000);
    $("#nav-i3").fadeIn(1300);
    $("#gso_image").fadeIn(2000);
  } else if (window.location.href.indexOf("about") > -1) {
    $("#nav-i1").fadeIn(700);
    $("#nav-i2").fadeIn(1000);
    $("#nav-i3").fadeIn(1300);
    $("#gso_image").fadeIn(2000);
  } else {
    window.scrollTo(0,0);
    disableScroll();
    // fade in and out headphones image
    $( ".headphoneNotice" ).fadeIn(700);
    await sleep(1500);
    $( ".headphoneNotice" ).fadeOut(500);
    await sleep(1000); // nobody wants to wait
  }
  var jvid = document.getElementById("journeyVideo");

  enableScroll();
  document.body.style.overflow = 'visible';
  $("#down_btn_icon").fadeIn(1000);
  $("#nav-i1").fadeIn(700);
  $("#nav-i2").fadeIn(1000);
  $("#nav-i3").fadeIn(1300);
  $("#gso_image").fadeIn(2000);
  jvid.style.display = "block";
  await jvid.play();
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
