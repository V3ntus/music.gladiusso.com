import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

export default function Home({ isMuted, blur }) {
  const [isShowing, setIsShowing] = React.useState(false);
  const [isVideoDone, setIsVideoDone] = React.useState(false);
  const [isVideoDoneLoading, setIsVideoDoneLoading] = React.useState(false);

  const introVideo = React.useRef(null);

  const { o } = useSpring({
    from: {
      o: 0,
    },
    o: isShowing ? 1 : 0,
    config: config.slow,
  });

  React.useEffect(() => {
    setIsShowing(true);
    const introVideoInterval = setInterval(() => {
      if (
        document
          .getElementById("home_video_src_buf")
          .getAttribute("data-src") !== "#"
      ) {
        setIsVideoDoneLoading(true);
        if (introVideo && introVideo.current) {
          introVideo.current.play();
          introVideo.current.addEventListener("ended", () => {
            setIsVideoDone(true);
          });
          clearInterval(introVideoInterval);
        }
      }
    }, 100);

    return () => {
      setIsShowing(false);
      clearInterval(introVideoInterval);
    };
  }, []);

  return (
    <animated.div
      id="main-page-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        o: o.to((o) => o),
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          maxWidth: "100vw",
          top: -50,
        }}
      >
        {/* Overlay to prevent video selection */}
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: "10",
            top: 0,
            left: 0,
          }}
        ></div>
        {isVideoDoneLoading ? (
          isVideoDone ? (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="Journey II cover"
                src="/images/journey_2.cover.png"
                id="journey_2_cover"
                style={{
                  objectFit: "cover",
                  maxWidth: "100vw",
                }}
              />
            </div>
          ) : (
            <video
              muted={isMuted}
              preload="auto"
              style={{
                minWidth: "100%",
                minHeight: "100%",
                margin: "0 auto",
                width: "400px",
                position: "fixed",
                willChange: "transform",
                ...(blur && blur > 0
                  ? {
                      filter: `blur(${blur}px)`,
                      transform: `scale(${~~(100 - blur * 2)}%)`,
                      opacity: `${Math.min(Math.max(1 - blur / 5, 0.5), 1)}`,
                    }
                  : {}),
              }}
              ref={introVideo}
            >
              <source
                src={document
                  .getElementById("home_video_src_buf")
                  .getAttribute("data-src")}
                type="video/mp4"
                id="home_video_src"
              />
            </video>
          )
        ) : (
          <div
            style={{
              minWidth: "100%",
              minHeight: "100%",
              margin: "0 auto",
              width: "400px",
              position: "fixed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#777777",
              }}
            >
              Loading video...
            </span>
          </div>
        )}
      </div>
    </animated.div>
  );
}
