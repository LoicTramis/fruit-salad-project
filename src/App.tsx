import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import FruitsPage from "./pages/FruitsPage";
import FruitPage from "./pages/FruitPage";
import NutrientsPage from "./pages/NutrientsPage";
import SaladsPage from "./pages/SaladsPage";
import { useState } from "react";

function App() {
  const [selectedFruits, setSelectedFruits] = useState(new Set());

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruits">
          <Route index element={<FruitsPage selectedFruits={selectedFruits} setSelectedFruits={setSelectedFruits} />} />
          <Route
            path=":fruitId"
            element={<FruitPage selectedFruits={selectedFruits} setSelectedFruits={setSelectedFruits} />}
          />
        </Route>
        <Route
          path="/nutrients"
          element={<NutrientsPage selectedFruits={selectedFruits} setSelectedFruits={setSelectedFruits} />}
        />
        <Route
          path="/my-salad"
          element={<SaladsPage selectedFruits={selectedFruits} setSelectedFruits={setSelectedFruits} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
