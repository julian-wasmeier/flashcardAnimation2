import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useGesture } from "react-use-gesture";
function Card(props) {
  const [toggle, set] = useState();
  const Fade = useSpring({
    // config: { friction: 200, tension: 200, mass: 4 },
    config: { ...config.stiff, duration: 900 },

    opacity: toggle ? "0" : "1",
    transform: toggle
      ? "translate(1500vw) scale(0.8)"
      : "translate(0px) scale(1)",
  });

  return (
    <div>
      <animated.div className="container" style={Fade}>
        <h1>{props.title}</h1>
        <p>
          Aute magna veniam dolor consequat elit quis Lorem culpa sint proident
          consequat. Incididunt commodo do esse ex consequat deserunt eiusmod
          sit eiusmod magna proident aliqua et laborum. Anim esse ullamco ipsum
          in non nulla.
        </p>
        <button onClick={() => set(!toggle)}>Next</button>
      </animated.div>
    </div>
  );
}

export default Card;
