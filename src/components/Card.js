import React, { useState, useRef } from "react";
import { useSpring, animated, config, useChain } from "react-spring";
import styles from "./Card.module.css";

function Card(props) {
  const [toggle, set] = useState();
  const leave = useSpring({
    // config: { friction: 200, tension: 200, mass: 4 },
    config: { duration: 600 },

    transform:
      props.current <= props.id || toggle
        ? "translate(1500vw) scale(0.5) rotateY(100deg) "
        : "translate(0px) scale(1) rotateY(0deg)",
  });

  const fade = useSpring({
    config: { duration: 300, initial: null },

    opacity: props.current <= props.id || toggle ? "0" : "1",
  });

  return (
    <animated.div
      className={styles.cardContainer}
      style={{ ...leave, ...fade }}
    >
      <h1>{props.title}</h1>
      <p>
        Aute magna veniam dolor consequat elit quis Lorem culpa sint proident
        consequat. Incididunt commodo do esse ex consequat deserunt eiusmod sit
        eiusmod magna proident aliqua et laborum. Anim esse ullamco ipsum in non
        nulla.
      </p>
      <button className={styles.nextButton} onClick={props.nextHandler}>
        NEXT
      </button>
      <button className={styles.prevButton} onClick={props.prevHandler}>
        PREV
      </button>
    </animated.div>
  );
}

export default Card;
