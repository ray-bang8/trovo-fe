import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import ElixirSet from "./components/ElixirSet";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <ElixirSet />
    </div>
  );
}

export default App;
