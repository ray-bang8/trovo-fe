import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import ElixirSet from "./components/ElixirSet";
import HowItWorks from "./components/HowItWorks";
import { ManagersSection } from "./components/ManagersSection";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <ElixirSet />
      <HowItWorks />
      <ManagersSection />
      <Footer />
    </div>
  );
}

export default App;
