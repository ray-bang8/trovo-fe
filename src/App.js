import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import ElixirSet from "./components/ElixirSet";
import HowItWorks from "./components/HowItWorks";
import "./App.css";
import { ManagersSection } from "./components/ManagersSection";

function App() {
  return (
    <div className="app">
      <Header />
      <ElixirSet />
      <HowItWorks />
      <ManagersSection />
    </div>
  );
}

export default App;
