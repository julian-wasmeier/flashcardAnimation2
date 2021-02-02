import React, { useState, useRef } from "react";
import { useSpring, animated, config, useChain } from "react-spring";
import styles from "./Card.module.css";

function Test(props) {
  const [disabled, setDisabled] = useState(false);

  const upRef = useRef();
  const up = useSpring({
    transform:
      props.curr <= props.id ? "translate(20px,20px)" : "translate(0px, 0px)",
    ref: upRef,
  });

  const leaveRef = useRef();
  const leave = useSpring({
    // config: { friction: 200, tension: 200, mass: 4 },
    config: { duration: 600 },

    marginLeft: props.curr <= props.id ? 1000 : 0,

    ref: leaveRef,
  });

  const fadeRef = useRef();
  const fade = useSpring({
    config: { duration: 400 },

    opacity: props.curr <= props.id ? "0" : "1",
    ref: fadeRef,
  });

  useChain(
    props.curr <= props.id
      ? [upRef, leaveRef, fadeRef]
      : [leaveRef, upRef, fadeRef],
    [0, 0.3, 0.3]
  );

  const nextHandler2 = () => {
    props.nextHandler();
    setDisabled(true);
  };
  return (
    <animated.div
      id="cardCon"
      className={styles.cardContainer}
      style={{ ...leave, ...up, ...fade }}
    >
      <div className={styles.contentContainer}>
        <h1>{props.title}</h1>
        <p>
          Aute magna veniam dolor consequat elit quis Lorem culpa sint proident
          consequat. Incididunt commodo do esse ex consequat deserunt eiusmod
          sit eiusmod magna proident aliqua et laborum. Anim esse ullamco ipsum
          in non nulla.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          disabled={disabled}
          className={styles.nextButton}
          onClick={nextHandler2}
        >
          NEXT
        </button>
        <button
          disabled={disabled}
          className={styles.prevButton}
          onClick={props.prevHandler}
        >
          PREV
        </button>
      </div>
    </animated.div>
  );
}

export default Test;