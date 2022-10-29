import React from "react";
import { animated, config, to, useSpring } from "@react-spring/web";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Home from "../pages/Home";
import Work from "../pages/Work";

export default function HomeContainer() {
  const [showing, isShowing] = React.useState(false);
  const [isFullNavOpen, setIsFullNavOpen] = React.useState(false);
  const [muted, setMuted] = React.useState(true);

  const locoscroll = React.useRef(null);
  const homeRef = React.useRef(null);
  const workRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const refs = [homeRef, workRef, aboutRef];

  const { y, o, s, x } = useSpring({
    from: {
      y: -100,
      o: 0,
      s: 1,
      x: 0,
    },
    y: showing && !isFullNavOpen ? 0 : -100,
    o: showing ? 1 : 0,
    s: isFullNavOpen ? 0.5 : 1,
    x: isFullNavOpen ? 25 : 0,
    config: config.slow,
  });

  React.useEffect(() => {
    isShowing(true);

    return () => {
      isShowing(false);
    };
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={locoscroll}
      watch={[]}
    >
      <div
        style={{
          position: "fixed",
          zIndex: 2,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
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
                  refs[idx].current.scrollIntoView({
                    block: "center",
                    inline: "center",
                  })
                }
                onClick={() => {
                  setIsFullNavOpen(false);
                  setTimeout(
                    () =>
                      refs[idx].current.scrollIntoView({
                        block: "start",
                        inline: "nearest",
                      }),
                    500
                  );
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
              refs[0].current.scrollIntoView({
                block: "center",
                inline: "center",
              });
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
              {["_1", "_2", "_3"].map((e) => (
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
                  {["_1", "_2", "_3"].map((e) => (
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
      <main data-scroll-container ref={locoscroll} id="loco-scroll-container">
        <animated.div
          style={{
            position: "relative",
            top: 0,
            transform: to(
              [x, y],
              (x, y) => `translateX(${x}%) translateY(${y / 2}vh)`
            ),
            scale: s.to((s) => s),
          }}
        >
          <div ref={refs[0]} data-scroll-section>
            <Home isNavOpen={isFullNavOpen} isMuted={muted} />
          </div>
          <div ref={refs[1]} data-scroll-section>
            <Work isNavOpen={isFullNavOpen} />
          </div>
          <div ref={refs[2]} data-scroll-section>
            <Work isNavOpen={isFullNavOpen} />
          </div>
        </animated.div>
      </main>
    </LocomotiveScrollProvider>
  );
}
