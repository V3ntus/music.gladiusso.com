import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

export default function Home({ isNavOpen, sx }) {
  const { s, x } = useSpring({
    from: {
      s: 1,
      x: 0,
    },
    s: isNavOpen ? 0.5 : 1,
    x: isNavOpen ? 50 : 0,
    config: config.slow,
  });

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
        scale: s.to((s) => s),
        backgroundColor: "#111111",
        transform: x.to((x) => `translateX(${x}%)`),
        ...sx,
      }}
    >
      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Hi there</span>
      </div>
    </animated.div>
  );
}
