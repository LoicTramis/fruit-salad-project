import React, { useContext, useEffect, useState } from "react";
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

const FruitsPage = ({ fruits, setFruits }) => {
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
        <Aside fruits={fruits} />
        <main className="main-content">
          <h2>Loading...</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="content-page">
      <Aside fruits={fruits} />
      <main className="fruits-content">
        {fruits.map((fruit: Fruit) => {
          return <FruitCard key={fruit.id} fruit={fruit} />;
        })}
      </main>
    </div>
  );
};

export default FruitsPage;
