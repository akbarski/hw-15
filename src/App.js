import "./App.css";
import Counter from "./components/counter/Counter";
import Input from "./components/input/Input";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Timer />
      <hr />
      <Input />
    </div>
  );
}

export default App;
