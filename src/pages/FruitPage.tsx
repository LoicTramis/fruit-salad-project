import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import axios from "axios";

const FruitPage = ({ selectedFruits, setSelectedFruits }) => {
  const [fruit, setFruit] = useState(null);
  const { fruitId } = useParams();

  const fetchFruit = async () => {
    try {
      const responseFruit = await axios.get(import.meta.env.VITE_URL + `/fruits/${fruitId}`);
      setFruit(responseFruit.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {});
  return (
    <div className="content-page">
      <Aside selectedFruits={selectedFruits} setSelectedFruits={setSelectedFruits} />
      <main className="main-content">FruitsPage</main>
    </div>
  );
};

export default FruitPage;
