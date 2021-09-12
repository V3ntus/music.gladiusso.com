<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Official landing for the artist 'Gladius Synthetic Orchestra'">

  <meta property="og:url" content="http://gladiusmusic.rf.gd/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Gladius Synthetic Orchestra">
  <meta property="og:description" content="Official landing for the artist 'Gladius Synthetic Orchestra'">
  <meta property="og:image" content="http://gladiusmusic.rf.gd/images/aiwa.png">

  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="gladiusmusic.rf.gd">
  <meta property="twitter:url" content="http://gladiusmusic.rf.gd/">
  <meta name="twitter:title" content="Gladius Synthetic Orchestra">
  <meta name="twitter:description" content="Official landing for the artist 'Gladius Synthetic Orchestra'">
  <meta name="twitter:image" content="http://gladiusmusic.rf.gd/images/aiwa.png">

  <link rel="preload" href="/fonts/Posterama.ttf" as="font" crossorigin="anonymous">
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/css/modal-video.min.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="/css/slick.css">

  <script src="https://kit.fontawesome.com/bdbbf59900.js" crossorigin="anonymous"></script>
  <script src="/js/main.js"></script>
  <title>Home - Gladius Music</title>
</head>
<body onload="onPageLoadHandler()">
  <a id="home"></a>
  <div class="home">
    <div class="nav">
      <ul class="nav-bar">
        <a id="nav-i1" style="display: none;" href="#home"><li id="nav-item home">HOME</li></a>
        <a id="nav-i2" style="display: none;" href="#mywork"><li id="nav-item work">MY WORK</li></a>
        <a id="nav-i3" style="display: none;" href="#about"><li id="nav-item about">ABOUT</li></a>
      </ul>
    </div>

    <div class="headphoneNotice" style="display: none;">
      <img id="headphoneNoticeImg" src="images/headphones.png" />
      <p id="headphoneNoticeText">USE HEADPHONES FOR A BETTER EXPERIENCE</p>
    </div>

    <div class="introVideo">
      <video muted style="display: none;" preload="auto" id="journeyVideo">
        <source src="videos/journey.mp4" type="video/mp4">
      </video>
    </div>

    <div class="journeyHeader">
      <img id="journeyHeaderImage" src="/images/journeyPoster.png" loading="lazy" style="display: none;">
    </div>

    <div class="gso_logo">
      <img id="gso_image" src="/images/logo1.png" loading="lazy" style="display: none;">
    </div>

    <div class="fixed-action-btn">
      <div id="mute_label" class="noselect"></div>
      <a class="btn-floating grey darken-4 muteBtn noselect" accesskey="m" onclick="muteButton()"><i class="material-icons">music_note</i></a>
    </div>

    <div class="down_btn">
      <a href="#mywork"><i id="down_btn_icon" class="material-icons" style="font-size: 40px; color: white; display: none;">keyboard_arrow_down</i></a>
    </div>
  </div>

  <div class="mywork">
    <a id="mywork"></a>
    <div id="top_highlight">
      <img src="/images/hidden_poster.jpg" id="top-poster" width="100%" style="opacity: 0.7;">
      <button class="js-modal-btn button" id="yt-play-btn" data-video-id="5QSsEcKLTB8">Play</button>
      <div class="top_text1"><h3>HIDDEN</h3>A short film bringing attention to mental health over the pandemic lockdown.</div>
    </div>
  </div>


  <div id="releases">
    <h3 style="text-align: center;">My Music</h3>
    <hr />
    <div id="leftside">
      <table>
        <tr><h2>Albums</h2></tr>

        <tr>
          <td><img src="/images/journey.png" width="150px" height="150px" loading="lazy"></td>
          <td><h3>Journey I</h3><hr><br>
            <a title="Spotify" href="https://open.spotify.com/album/07Kp9yAlrn9cb9PXclvGZk?si=yrm0lkRwSLWWLft9zgIHvg" target="_blank"><i alt="Spotify" class="fab fa-spotify fa_music"></i></a>
            <a title="Apple Music" href="https://music.apple.com/us/album/journey-i/1555575638" target="_blank"><i alt="Apple Music" class="fab fa-itunes fa_music"></i></a>
            <a title="Play trailer on Youtube" class="js-modal-btn" data-video-id="ex9sty5eDJg"><i alt="Play on YouTube" class="fab fa-youtube fa_music"></i></a>
          </td>
        </tr>

        <tr>
          <td><img src="/images/sal.png" width=150px height=150px loading="lazy"></td>
          <td><h3>Serenades and Lullabies</h3><hr /><br>
            <a title="Spotify" href="https://open.spotify.com/album/2Bq8Dlbj3xTDMhPd7algGO" target="_blank"><i alt="Spotify" class="fab fa-spotify fa_music"></i></a>
            <a title="Apple Music" href="https://music.apple.com/us/album/serenades-and-lullabies/1540166836" target="_blank"><i alt="Apple Music" class="fab fa-itunes fa_music"></i></a>
            <a title="Play trailer on Youtube" class="js-modal-btn" data-video-id="SOfDBcE_e0M"><i alt="Play on YouTube" class="fab fa-youtube fa_music"></i></a>
          </td>
        </tr>

        <tr>
          <td><img src="/images/aiwa.png" width="150px" height="150px" loading="lazy"></td>
          <td><h3>And I wandered aimlessly</h3><hr><br>
            <a title="Spotify" href="https://open.spotify.com/album/4y0lSUJQYa5BsPQQco6jRm?si=6WFqqKuUSROK9wvp7M7Kvg" target="_blank"><i alt="Spotify" class="fab fa-spotify fa_music"></i></a>
            <a title="Apple Music" href="https://music.apple.com/us/album/and-i-wandered-aimlessly/1526705263" target="_blank"><i alt="Apple Music" class="fab fa-itunes fa_music"></i></a>
            <a title="Play trailer on Youtube" class="js-modal-btn" data-video-id="L8ivBIiiimE"><i alt="Play on YouTube" class="fab fa-youtube fa_music"></i></a>
          </td>
        </tr>
      </table>
    </div>

    <div id="rightside">
      <table>
        <tr><h2>Singles</h2></tr>
        <tr>
          <td><h3>Redirection</h3><hr><br>
            <a title="Spotify" href="https://open.spotify.com/track/5xODV3v08muiz9ao9omfDl" target="_blank"><i alt="Spotify" class="fab fa-spotify fa_music"></i></a>
            <a title="Apple Music" href="https://music.apple.com/us/album/redirection-single/1539690207" target="_blank"><i alt="Apple Music" class="fab fa-itunes fa_music"></i></a>
            <a title="Play on YouTube" class="js-modal-btn" data-video-id="1Xd34KJ0nHA"><i alt="YouTube" class="fab fa-youtube fa_music"></i></a>
          </td>
          <td><img src="https://i.scdn.co/image/ab67616d00001e0298598812f69a8059b506ffa6" width=150px height=150px loading="lazy"></td>
        </tr>

        <tr>
          <td>
            <h3>Betrayal</h3><hr><br>
            <a title="Spotify" href="https://open.spotify.com/track/2QI6BgA6S3dEVCGfOankbm" target="_blank"><i alt="Spotify" class="fab fa-spotify fa_music"></i></a>
            <a title="Apple Music" href="https://music.apple.com/us/album/betrayal-single/1531726076" target="_blank"><i alt="Apple Music" class="fab fa-itunes fa_music"></i></a>
            <a title="Play on YouTube" class="js-modal-btn" data-video-id="XZ_u0ZQs12g"><i alt="YouTube" class="fab fa-youtube fa_music"></i></a>
          </td>
          <td><img src="https://i.scdn.co/image/ab67616d00001e02b807c7a5c4600dfb09b539d4" width="150px" height="150px" loading="lazy"></td>
        </tr>

        <tr>
          <td>
            <h3>Artemis</h3><hr><br>
            <a title="Spotify" href="https://open.spotify.com/track/2YjQDfTd46lvIoBxMDXluc" target="_blank"><i alt="Spotify" class="fab fa-spotify fa_music"></i></a>
            <a title="Apple Music" href="https://music.apple.com/us/album/artemis-single/1538459979" target="_blank"><i alt="Apple Music" class="fab fa-itunes fa_music"></i></a>
            <a title="Play on YouTube" class="js-modal-btn" data-video-id="E_vPGelQd08"><i alt="YouTube" class="fab fa-youtube fa_music"></i></a>
          </td>
          <td><img src="https://i.scdn.co/image/ab67616d00001e02669447605bee28df54730c12" width="150px" height="150px" loading="lazy"></td>
        </tr>
      </table>
    </div>
    <span class="spacer" style="color: white; text-align: center;"><p>Find more of my discography in the links bellow</p></span>
  </div>

  <a id="about"></a>
  <div class="about">
    <hr>
    <!--<img src="/images/IMG_1904_crop_square_800x800.jpg" width="700px" height="700px">-->
    <img src="/images/cover2.jpg" style="opacity: 0.2;" loading="lazy">
    <img src="/images/cover2.jpg" style="opacity: 0.8;" class="overlayImg" loading="lazy">
    <div class="bio">
      A young, aspiring composer for film and media. Blurring the line between dark and emotive music, I often express my ideas through loss or remission through a calm atmosphere, or a dark soundscape.
    </div>
    <div class="socials">
      <ul>
        <a href="https://open.spotify.com/artist/4NXjwAooTVsCxIoSsmD2ns"><li class="fab fa-spotify"></li></a>
        <a href="https://music.apple.com/us/artist/gladius-synthetic-orchestra/1493153485"><li class="fab fa-itunes"></li></a>
        <a href="https://www.facebook.com/gladiussyntheticorchestra/"><li class="fab fa-facebook"></li></a>
        <a href="https://www.youtube.com/GladiusSyntheticOrchestra"><li class="fab fa-youtube"></li></a>
        <a href="https://music.amazon.com/artists/B083918CF5/gladius-synthetic-orchestra"><li class="fab fa-amazon"></li></a>
        <a href="https://instagram.com/gladiussyntheticorchestra"><li class="fab fa-instagram"></li></a>
        <a href="https://www.imdb.com/name/nm12169761/"><li class="fab fa-imdb"></li></a>
      </ul>
    </div>
  </div>
  <footer style="color:#444; font-size: 12px;">
  &copy; Joseph Packard, Danielle Troyer -- <a href="mailto:contact.GladiusMusic@gmail.com" style="color: #555; font-size: 12px">contact.GladiusMusic@gmail.com</a>
</footer>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript">

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

  var btnMuted = true;
  $("#mute_label").html('<p class="muteLabel">Un<u>m</u>ute</p>');
  function muteButton() {
    if(btnMuted == true){
      btnMuted = false;
      document.getElementById("journeyVideo").muted = false;
      $("#mute_label").html('<p class="muteLabel"><u>M</u>ute</p>');
    } else if (btnMuted == false) {
      btnMuted = true;
      document.getElementById("journeyVideo").muted = true;
      $("#mute_label").html('<p class="muteLabel">Un<u>m</u>ute</p>');
    }
  }
  $(document).keypress(function (e) {
    if (e.which == 77) {
      muteButton();
    }
  });

  $(document.body).on('keydown', function (e) {
    if (e.which == 77) {
      muteButton();
    }
  });

  $(window).on('scroll', function () {

    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    var pixs = $(document).scrollTop()
    op = 1 - (pixs / 500);
    pixs = pixs / 200;
    if (!isMobile) {
      scale = pixs;
      if (scale >= 9) {
        scale = 9;
      }
      if (op < 0.1) {
        op = 0.25;
      }
      $("#journeyHeaderImage").css({"width": "5"+scale+"%", "-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)", "opacity": op })
      $("#journeyVideo").css({"-o-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)", "opacity": op})
    } else {
      if (op < 0.1) {
        op = 0.06;
      }
      $("#journeyHeaderImage").css({"opacity": op })
      $("#journeyVideo").css({"opacity": op})
    }
  });

  document.getElementById('journeyVideo').addEventListener('ended', handleJourneyEnd, false);
  function handleJourneyEnd(e) {
    //make video invisible and set journey poster to fade in
    document.getElementById("journeyVideo").style.opacity = "0";
    $( "#journeyHeaderImage" ).fadeIn(700);
  };

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });
</script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>-->
<script src="/js/jquery-modal-video.js"></script>
<!--<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>-->
</html>
