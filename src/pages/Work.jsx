import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

export default function Work() {
  const [isShowing, setIsShowing] = React.useState(false);

  const { o } = useSpring({
    from: {
      o: 0,
    },
    o: isShowing ? 1 : 0,
    config: config.slow,
  });

  React.useEffect(() => {
    setIsShowing(true);

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
        backgroundColor: "#111111",
        o: o.to((o) => o),
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
