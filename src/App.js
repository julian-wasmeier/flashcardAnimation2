import "./App.css";
import Card from "./components/Card";
function App() {
  const items = [
    { title: "Jan" },
    { title: "Peter" },
    { title: "Jannis" },
    { title: "Paul" },
  ];
  return (
    <div className="App">
      {items.map((item) => (
        <Card title={item.title}></Card>
      ))}
    </div>
  );
}

export default App;
