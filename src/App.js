import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import AllBeers from "./pages/AllBeers";
import OneBeer from "./pages/OneBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route element={<Layout />}>
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/beers/:beerId" element={<OneBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
