import "./App.css";
import styles from "./components/Card.module.css";
import { useState } from "react";
import Card from "./components/Card";
function App() {
  const items = [
    { id: 1, title: "Jan" },
    { id: 2, title: "Peter" },
    { id: 3, title: "Jannis" },
    { id: 4, title: "Paul" },
  ];
  const [current, setCurrent] = useState(items.length + 1);

  const nextHandler = () => {
    setCurrent((prev) => prev - 1);
  };

  const prevHandler = () => {
    if (current < items.length + 1) {
      setCurrent((prev) => prev + 1);
    }
  };
  console.log(current);
  return (
    <div className="App">
      <button className="prevButton" onClick={prevHandler}>
        PREV
      </button>
      {items.map((item, index) => (
        <Card
          current={current}
          index={index}
          id={item.id}
          title={item.title}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
        ></Card>
      ))}
      <button className="nextButton" onClick={nextHandler}>
        NEXT
      </button>
    </div>
  );
}

export default App;
