import React from "react";
import { useParams } from "react-router-dom";
import Aside from "../components/Aside/Aside";

const FruitPage = () => {
  const { fruitId } = useParams();
  return (
    <div className="content-page">
      <Aside />
      <main className="main-content">FruitsPage</main>
    </div>
  );
};

export default FruitPage;
