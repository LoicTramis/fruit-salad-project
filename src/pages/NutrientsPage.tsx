import React from "react";
import Aside from "../components/Aside/Aside";

const NutrientsPage = ({ selectedFruits, setSelectedFruits }) => {
  return (
    <div className="content-page">
      <Aside selectedFruits={selectedFruits} setSelectedFruits={setSelectedFruits} />
      <main className="main-content">FruitsPage</main>
    </div>
  );
};

export default NutrientsPage;
