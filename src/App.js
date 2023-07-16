import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { TrovoShop } from "pages/trovo-shop";
import { TrovoLive } from "pages/trovo-live";
import "./App.css";

function App() {
  return (
    // <div className="app">
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigate to="/trovo-shop" />} />
          <Route path="/trovo-shop" element={<TrovoShop />} />
          <Route path="/trovo-live" element={<TrovoLive />} />
        </Routes>
      </BrowserRouter>
    </>

    // </div>
  );
}

export default App;
