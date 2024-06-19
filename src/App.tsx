import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import FruitsPage from "./pages/FruitsPage";
import FruitPage from "./pages/FruitPage";
import NutrientsPage from "./pages/NutrientsPage";
import SaladsPage from "./pages/SaladsPage";
import "./App.css";

interface SFContextType {
  selectedFruits: Set<number | any>;
  setSelectedFruits: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const SelectedFruitsContext = createContext<SFContextType | undefined>(undefined);

function App() {
  const [selectedFruits, setSelectedFruits] = useState(new Set());

  const [fruits, setFruits] = useState(null);

  return (
    <>
      <Header />

      <SelectedFruitsContext.Provider value={{ selectedFruits, setSelectedFruits }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fruits">
            <Route index element={<FruitsPage fruits={fruits} setFruits={setFruits} />} />
            <Route path=":fruitId" element={<FruitPage fruits={fruits} />} />
          </Route>
          <Route path="/nutrients" element={<NutrientsPage fruits={fruits} />} />
          <Route path="/my-salad" element={<SaladsPage fruits={fruits} />} />
        </Routes>
      </SelectedFruitsContext.Provider>

      <Footer />
    </>
  );
}

export default App;
