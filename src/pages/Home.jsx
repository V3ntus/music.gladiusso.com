import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

export default function Home({ isMuted }) {
  const [isShowing, setIsShowing] = React.useState(false);
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

    let introVideoP = introVideo.current.play();
    // introVideo.current;

    return () => {
      setIsShowing(false);
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
        height: "100vh",
        backgroundColor: "#000000",
        o: o.to((o) => o),
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: "10",
          }}
        ></div>
        <video
          muted={isMuted}
          preload="auto"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            margin: "0 auto",
            width: "400px",
            position: "fixed",
          }}
          ref={introVideo}
        >
          <source src="/Videos/journey.mp4" type="video/mp4" />
        </video>
      </div>
    </animated.div>
  );
}
