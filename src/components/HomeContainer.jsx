import React from "react";
import { animated, config, useSpring } from "@react-spring/web";

import Home from "../pages/Home";

export default function HomeContainer() {
  const [showing, isShowing] = React.useState(false);
  const [isFullNavOpen, setIsFullNavOpen] = React.useState(false);

  const { y, o } = useSpring({
    from: {
      y: -100,
      o: 0,
    },
    y: showing && !isFullNavOpen ? 0 : -100,
    o: showing ? 1 : 0,
    config: config.slow,
  });

  React.useEffect(() => {
    isShowing(true);

    return () => {
      isShowing(false);
    };
  }, []);

  return (
    <>
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
            }}
          >
            &times;
          </button>
        </div>
        <ul>
          {["Home", "Work", "About Me"].map((e) => (
            <li>
              <a href={`/${e.toLowerCase().replace(" ", "")}`}>{e}</a>
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
        {/*
            Menu button - when clicked, scale out a preview of the entire webpage and use it as a background. Show links to sections ('Home', 'My Work', 'About')
                On section link hover, highlight that section of the page in the background.
            */}
        <animated.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setIsFullNavOpen(true)}
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
      <Home
        isNavOpen={isFullNavOpen}
        sx={{
          opacity: o,
        }}
      />
    </>
  );
}
