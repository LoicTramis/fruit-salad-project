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

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruits">
          <Route index element={<FruitsPage />} />
          <Route path=":fruitId" element={<FruitPage />} />
        </Route>
        <Route path="/nutrients" element={<NutrientsPage />} />
        <Route path="/my-salad" element={<SaladsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
