import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Title() {
    const [showing, isShowing] = React.useState(false);

    const { o } = useSpring({
        from: {
            o: 0
        },
        o: showing ? 1 : 0,
    });

    React.useEffect(() => {
        setTimeout(() => {
            isShowing(true);
            setTimeout(() => {
                isShowing(false);
            }, 2000);
        }, 700)

        return () => {};
    }, []);

    return(
        <animated.div style={{
            display: o.to((o) => {if (o === 0) return 'none'; else return 'flex'}),
            height: "100vh",
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
            opacity: o.to((o) => o)
        }}>
            <div style={{
                display: "block",
                textAlign: "center"
            }}>
                <img src="/images/headphones.png" alt="Headphones" width="64px" height="64px"/>
                <p>Use headphones for the best experience</p>
            </div>
        </animated.div>
    );
}