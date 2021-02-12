import React, { useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useSpring, animated, config, useChain } from "react-spring";
import styles from "./Card.module.css";

function Card(props) {
  const [cardStyle, setCardStyle] = useState();
  const [isFlipped, setIsFlipped] = useState();
  const upRef = useRef();
  console.log(props.index);
  console.log(props.curr);
  const up = useSpring({
    config: { ...config.stiff, friction: 40 },

    transform:
      props.curr <= props.index
        ? "translate(150px,-10px)  "
        : "translate(0px, 0px) ",
    ref: upRef,
  });

  const leaveRef = useRef();
  const leave = useSpring({
    // config: { friction: 50, tension: 200, mass: 5 },
    config: { ...config.stiff, friction: 48, mass: 5, tension: 200 },

    marginLeft: props.curr <= props.index ? 1000 : 0,

    ref: leaveRef,
  });

  const fadeRef = useRef();
  const fade = useSpring({
    config: { duration: 280 },

    opacity: props.curr <= props.index ? "0" : "1",
    ref: fadeRef,
  });

  const CardStyle = () => {
    if (props.index === props.curr - 1) {
      return {
        left: "0%",
        transform: "scale(1) ",
        filter: "contrast(100%) brightness(100%) saturate(100%)",
      };
    } else if (props.index === props.curr - 2) {
      return {
        left: "15%",
        transform: "scale(0.914) ",
        filter: "contrast(65%) brightness(112%) saturate(80%)",
      };
    } else if (props.index === props.curr - 3) {
      return {
        left: "25%",
        transform: "scale(0.852)",
        filter: "contrast(30%) brightness(120%) saturate(60%) ",
      };
    } else if (props.index >= props.curr) {
      return {
        left: "0%",
        transform: "scale(1) ",
        filter: "contrast(100%) brightness(100%) saturate(100%)",
      };
    } else {
      return {
        left: "20%",
        transform: "scale(0.852)",
        filter: "contrast(30%) brightness(155%) saturate(30%) ",
      };
    }
  };

  const card1 = useSpring({
    ...CardStyle(),
  });

  // const card2Ref = useRef();
  // const card2 = useSpring({
  //   top: props.index === props.curr - 2 ? " 30% " : "20%",
  //   left: props.index === props.curr - 2 ? " 34%" : "40%",
  // });

  useChain(
    [upRef, leaveRef, fadeRef],

    [0, 0.1, 0.2]
  );

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <animated.div
        className={styles.cardContainer}
        style={{ ...fade, ...leave, ...up, ...card1 }}
      >
        <div className={styles.contentContainer}>
          <h1>{props.title}</h1>
          <p>
            Aute magna veniam dolor consequat elit quis Lorem culpa sint
            proident consequat. Incididunt commodo do esse ex consequat deserunt
            eiusmod sit eiusmod magna proident aliqua et laborum. Anim esse
            ullamco ipsum in non nulla.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            disabled={props.itemsLength === props.index + 1}
            className={styles.prevButton}
            onClick={props.prevHandler}
          >
            PREV
          </button>

          <button
            className={styles.husoButton}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            HUSO
          </button>
          <button
            disabled={props.curr === 0}
            className={styles.nextButton}
            onClick={props.nextHandler}
          >
            NEXT
          </button>
        </div>
      </animated.div>

      <animated.div
        className={styles.cardContainer}
        style={{ ...leave, ...up, ...fade, ...card1 }}
      >
        <div className={styles.contentContainer}>
          <h1>{props.title}</h1>
          <p>
            Aute magna veniam dolor consequat elit quis Lorem culpa sint
            proident consequat. Incididunt commodo do esse ex consequat deserunt
            eiusmod sit eiusmod magna proident aliqua et laborum. Anim esse
            ullamco ipsum in non nulla.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            disabled={props.itemsLength === props.index + 1}
            className={styles.prevButton}
            onClick={props.prevHandler}
          >
            PREV
          </button>

          <button
            className={styles.husoButton}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            HUSO
          </button>
          <button
            disabled={props.curr === 0}
            className={styles.nextButton}
            onClick={props.nextHandler}
          >
            NEXT
          </button>
        </div>
      </animated.div>
    </ReactCardFlip>
  );
}

export default Card;
