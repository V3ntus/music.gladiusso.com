import React from "react";
import { animated, config, to, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faItunes,
  faYoutube,
  faFacebook,
  faAmazon,
  faInstagram,
  faImdb,
} from "@fortawesome/free-brands-svg-icons";

import Home from "../pages/Home";
import Work from "../pages/Work";
import ModalVideo from "react-modal-video";

function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = React.useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}

export default function HomeContainer() {
  const [showing, isShowing] = React.useState(false);
  const [isFullNavOpen, setIsFullNavOpen] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const [homeBlur, setHomeBlur] = React.useState(0);
  const [isVideoDone, setVideoDone] = React.useState(false);
  const [modalVideo, setModalVideo] = React.useState("");

  const homeRef = React.useRef(null);
  const workRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const refs = [homeRef, workRef, aboutRef];
  const parallaxContainer = React.useRef(null);

  useEventListener("keydown", ({ key }) => {
    if (["77", "M"].includes(String(key).toUpperCase())) {
      setMuted(!muted);
    }
  });

  const parallaxContainerListener = setInterval(() => {
    if (parallaxContainer.current.container) {
      parallaxContainer.current.container.current.addEventListener(
        "scroll",
        () => {
          setHomeBlur(
            Math.min(
              parallaxContainer.current.container.current.scrollTop / 100,
              6
            )
          );
        }
      );
      clearInterval(parallaxContainerListener);
    }
  });

  const { y, o, s, x, invertedO, fullNavO } = useSpring({
    from: {
      y: -100,
      o: 0,
      s: 1,
      x: 0,
      invertedO: 0,
      fullNavO: 1,
    },
    y: showing && !isFullNavOpen ? 0 : -100,
    o: showing ? 1 : 0,
    s: isFullNavOpen ? 0.5 : 1,
    x: isFullNavOpen ? 25 : 0,
    invertedO: isFullNavOpen || isVideoDone ? 1 : 0,
    fullNavO: isFullNavOpen ? 0 : 1,
    config: config.slow,
  });

  React.useEffect(() => {
    isShowing(true);

    return () => {
      isShowing(false);
    };
  }, []);

  const handleScrollToId = (id, fromNav) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: fromNav && id !== "home_section" ? "start" : "center",
      inline: fromNav && id !== "home_section" ? "start" : "center",
    });
  };

  const handleScrollToPage = (page, fromNav) => {
    if (fromNav) {
      parallaxContainer.current.scrollTo(page);
    } else {
      document
        .getElementById(["home_section", "work_section", "about_section"][page])
        .scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
    }
  };

  const handleVideoDone = (done) => {
    setVideoDone(done);
  };

  const handleVideoChange = (id) => {
    setModalVideo(id);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={modalVideo !== ""}
        videoId={modalVideo}
        onClose={() => setModalVideo("")}
      />
      <div
        style={{
          position: "fixed",
          zIndex: 2,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          overflow: "hidden",
        }}
        className={isFullNavOpen ? "full-nav" : "full-nav hidden"}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
          }}
        >
          <button
            onClick={() => setIsFullNavOpen(false)}
            style={{
              fontSize: "3em",
              marginRight: "1em",
            }}
          >
            &times;
          </button>
        </div>
        <ul>
          {["Home", "Work", "About Me"].map((e, idx) => (
            <li key={e.toLowerCase().replace(" ", "")}>
              <button
                onMouseEnter={() =>
                  // handleScrollToId(
                  //   `${e.split(" ")[0].toLowerCase()}_section`,
                  //   false
                  // )
                  handleScrollToPage(idx, false)
                }
                onClick={() => {
                  setIsFullNavOpen(false);
                  // setTimeout(
                  //   () =>
                  //     handleScrollToId(
                  //       `${e.split(" ")[0].toLowerCase()}_section`,
                  //       true
                  //     ),
                  //   500
                  // );
                  handleScrollToPage(idx, true);
                }}
              >
                {e}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <animated.div
        style={{
          position: "fixed",
          top: y.to((y) => `${y}px`),
          left: 0,
          width: "100%",
          paddingTop: "24px",
          paddingBottom: "64px",
          zIndex: 1,
          opacity: o.to((o) => o),
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <span
          style={{
            position: "absolute",
            marginLeft: "64px",
          }}
        >
          GLADIUS SYNTHETIC ORCHESTRA
        </span>
        <animated.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => {
              setIsFullNavOpen(true);
              handleScrollToId(`home_section`);
            }}
            style={{
              border: "1px solid white",
            }}
            className="nav-btn"
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                display: "grid",
                alignContent: "stretch",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {["_1", "_2", "_3"].map(() => (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "18px",
                    height: "2px",
                  }}
                >
                  {["_1", "_2", "_3"].map((_) => (
                    <div
                      style={{
                        position: "relative",
                        width: "2px",
                        height: "2px",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                        }}
                      ></span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </button>
        </animated.div>
      </animated.div>
      {!isVideoDone && (
        <div
          id="floating-mute-btn"
          style={{
            display: "flex",
            position: "fixed",
            bottom: "23px",
            right: "23px",
            zIndex: 4,
            textAlign: "right",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="noselect"
            style={{
              padding: "4px",
            }}
          >
            {muted ? (
              <>
                Un<u>m</u>ute
              </>
            ) : (
              <>
                <u>M</u>ute
              </>
            )}
          </span>
          <button
            style={{
              backgroundColor: "#333333",
              borderRadius: "50%",
              padding: "8px",
              cursor: "pointer",
            }}
            onClick={() => setMuted(!muted)}
          >
            <span className="material-symbols-outlined">music_note</span>
          </button>
        </div>
      )}
      <animated.div
        style={{
          position: "sticky",
          zIndex: -5,
          opacity: fullNavO.to((o) => o),
          display: isFullNavOpen
            ? "none"
            : fullNavO.to((o) => {
                if (o === 1) return "block";
              }),
        }}
      >
        <Home
          isNavOpen={isFullNavOpen}
          isMuted={muted}
          blur={homeBlur}
          videoDone={handleVideoDone}
        />
      </animated.div>
      <Parallax
        pages={4}
        ref={parallaxContainer}
        style={{
          ...(isFullNavOpen && {
            overflow: "hidden",
          }),
        }}
      >
        <animated.div
          style={{
            top: 0,
            transform: to(
              [x, y],
              (x, y) => `translateX(${x}%) translateY(${y}%)`
            ),
            scale: s.to((s) => s),
          }}
        >
          <ParallaxLayer offset={0} speed={1}>
            <animated.div
              id="home_section"
              ref={refs[0]}
              style={{
                opacity: invertedO.to((o) => o),
              }}
            >
              <Home
                isNavOpen={isFullNavOpen}
                isMuted={true}
                videoDone={handleVideoDone}
              />
            </animated.div>
          </ParallaxLayer>
          {/*<ParallaxLayer*/}
          {/*  offset={0.99}*/}
          {/*  speed={1.1}*/}
          {/*  style={{*/}
          {/*    display: "flex",*/}
          {/*    flexDirection: "column",*/}
          {/*    alignItems: "center",*/}
          {/*    justifyContent: "center",*/}
          {/*    zIndex: 99,*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <animated.h1*/}
          {/*    style={{*/}
          {/*      fontSize: "100px",*/}
          {/*      opacity: fullNavO.to((o) => o),*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Work*/}
          {/*  </animated.h1>*/}
          {/*</ParallaxLayer>*/}
          {/*<ParallaxLayer*/}
          {/*  offset={0.99}*/}
          {/*  speed={1.3}*/}
          {/*  style={{*/}
          {/*    display: "flex",*/}
          {/*    flexDirection: "column",*/}
          {/*    alignItems: "center",*/}
          {/*    justifyContent: "center",*/}
          {/*    zIndex: 99,*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <animated.span*/}
          {/*    style={{*/}
          {/*      opacity: fullNavO.to((o) => o),*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    A short, highlighted collection of my work*/}
          {/*  </animated.span>*/}
          {/*</ParallaxLayer>*/}
          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              zIndex: 5,
              opacity: 0.5,
              backgroundImage: "url('/images/hidden_poster.jpg')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              cursor: "pointer",
            }}
            onClick={() => setModalVideo("5QSsEcKLTB8")}
          >
            <div ref={refs[1]}></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              pointerEvents: "none",
              zIndex: 5,
            }}
            id="work_section"
          >
            <h1>HIDDEN</h1>
            <span>A short film with my original music</span>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <Work
              isNavOpen={isFullNavOpen}
              handleModalVideo={handleVideoChange}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.99}
            speed={1.2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 99,
            }}
          >
            <animated.h1
              style={{
                fontSize: "100px",
                opacity: fullNavO.to((o) => o),
              }}
            >
              About Me
            </animated.h1>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.1}>
            <img
              src="/images/cover2.jpg"
              alt="Self portrait"
              style={{
                marginLeft: "25%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.7} id="about_section">
            <div ref={refs[2]}></div>
            <div
              style={{
                width: "400px",
                marginTop: "15%",
                marginLeft: "50%",
                zIndex: 99,
              }}
            >
              <h1>Gladius Synthetic Orchestra</h1>A young, aspiring composer for
              film and media. Blurring the line between dark and emotive music,
              I often express my ideas through loss or remission through a calm
              atmosphere, or a dark soundscape.
              <div className="about_me_socials">
                <ul>
                  <a href="https://open.spotify.com/artist/4NXjwAooTVsCxIoSsmD2ns">
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                  <a href="https://music.apple.com/us/artist/gladius-synthetic-orchestra/1493153485">
                    <FontAwesomeIcon icon={faItunes} />
                  </a>
                  <a href="https://www.facebook.com/gladiussyntheticorchestra/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.youtube.com/GladiusSyntheticOrchestra">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="https://music.amazon.com/artists/B083918CF5/gladius-synthetic-orchestra">
                    <FontAwesomeIcon icon={faAmazon} />
                  </a>
                  <a href="https://instagram.com/gladiussyntheticorchestra">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://www.imdb.com/name/nm12169761/">
                    <FontAwesomeIcon icon={faImdb} />
                  </a>
                </ul>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                color: "#aaaaaa",
                fontSize: "12px",
                bottom: "25%",
                left: 0,
                textAlign: "center",
                width: "100%",
              }}
            >
              &copy; Joseph Packard, Danielle Troyer
              <br />
              <a
                href="mailto:contact.GladiusMusic@gmail.com"
                style={{
                  color: "#888888",
                  fontSize: "10px",
                }}
              >
                contact.GladiusMusic@gmail.com
              </a>
            </div>
          </ParallaxLayer>
        </animated.div>
      </Parallax>
      <hr />
    </>
  );
}
