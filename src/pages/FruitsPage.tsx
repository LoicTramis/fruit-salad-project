import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import axios from "axios";
import FruitCard from "../components/FruitCard/FruitCard";
import "./FruitsPage.css";

type Fruit = {
  id: number;
  name: string;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
};

const FruitsPage = ({ selectedFruits, setSelectedFruits }) => {
  const [fruits, setFruits] = useState(null);

  const fetchFruits = async () => {
    try {
      const responseFruits = await axios.get(import.meta.env.VITE_URL + `/fruits`);
      setFruits(responseFruits.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  if (!fruits) {
    return (
      <div className="content-page">
        <Aside selectedFruits={selectedFruits} setSelectedFruits={setSelectedFruits} />
        <main className="main-content">
          <h2>Loading...</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="content-page">
      <Aside selectedFruits={selectedFruits} setSelectedFruits={setSelectedFruits} />
      <main className="fruit-content">
        {fruits.map((fruit: Fruit) => {
          return (
            <FruitCard
              key={fruit.id}
              fruit={fruit}
              selectedFruits={selectedFruits}
              setSelectedFruits={setSelectedFruits}
            />
          );
        })}
      </main>
    </div>
  );
};

export default FruitsPage;
