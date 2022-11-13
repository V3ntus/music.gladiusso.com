import React from "react";
import { animated, useSpring } from "@react-spring/web";

export default function VideoModal({ url, open }) {
  const [isOpen, setOpen] = React.useState(open || false);
  const videoContainer = React.useRef(null);

  const { o, y } = useSpring({
    from: {
      o: 0,
      y: 100,
    },
    o: isOpen ? 1 : 0,
    y: isOpen ? 0 : 100,
  });

  return (
    <animated.div
      style={{
        display: o.to((o) => {
          if (o > 0) return "flex";
          return "none";
        }),
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: o.to((o) => o),
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 99,
      }}
      onClick={(e) => {
        if (e.target !== videoContainer) {
          setOpen(false);
        }
      }}
    >
      <animated.div
        style={{
          transform: `translateY(${y}px)`,
        }}
      >
        <iframe
          title="YouTube Modal player"
          ref={videoContainer}
          id="ytplayer"
          width="640px"
          height="480px"
          src={url}
          autoPlay="1"
          fs="0"
        ></iframe>
      </animated.div>
    </animated.div>
  );
}
