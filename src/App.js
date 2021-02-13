import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const items = [
    { id: 1, title: "Jan" },
    { id: 2, title: "Peter" },
    { id: 3, title: "Jannis" },
    { id: 4, title: "Jannis" },
    { id: 5, title: "Jannis" },
    { id: 6, title: "Jannis" },
  ];
  const [current, setCurrent] = useState(items.length);
  const [isForward, setForward] = useState(true);

  const nextHandler = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const prevHandler = () => {
    if (current < items.length && current != items.length) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handler = isForward ? nextHandler : prevHandler;

  useEffect(() => {
    const infinite1 = setInterval(() => {
      handler();
    }, 850);
    return function cleanup() {
      clearInterval(infinite1);
    };
  }, [isForward]);

  return (
    <div className="App">
      <button
        disabled={current === items.length}
        className="prevButton"
        onClick={prevHandler}
      >
        PREV
      </button>
      <button
        onClick={() => {
          setForward(!isForward);
        }}
      >
        {isForward ? "Backwards" : "Forwards"}
      </button>
      <button
        disabled={current === 0}
        className="nextButton"
        onClick={nextHandler}
      >
        NEXT
      </button>
      <div className="cardStack">
        {items.map((item, index) => (
          <Card
            itemsLength={items.length}
            disabledPrev={current === items.length}
            disabledNext={current === 0}
            curr={current}
            index={index}
            id={item.id}
            key={item.id}
            title={item.title}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
