import React from "react";

const Delayed = ({ children, waitBeforeShow }) => {
  const [isShown, setIsShown] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow ?? 500);

    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

export function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

export default Delayed;
