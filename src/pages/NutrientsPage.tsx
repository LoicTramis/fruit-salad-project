import React from "react";
import Aside from "../components/Aside/Aside";

const NutrientsPage = ({ fruits }) => {
  return (
    <div className="content-page">
      <Aside fruits={fruits} />
      <main className="main-content">FruitsPage</main>
    </div>
  );
};

export default NutrientsPage;
