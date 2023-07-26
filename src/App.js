import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { TrovoShop } from "pages/trovo-shop";
import { TrovoLive } from "pages/trovo-live";
import { PubgMobile } from "pages/pubg-shop";
import { OtherGames } from "pages/other-games";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigate to="/trovo-shop" />} />
          <Route path="/trovo-shop" element={<TrovoShop />} />
          <Route path="/trovo-live" element={<TrovoLive />} />
          <Route path="/pubg-shop" element={<PubgMobile />} />
          <Route path="/other-games" element={<OtherGames />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
