import React from "react";
import "./Aside.css";

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

const Aside = ({ selectedFruits, setSelectedFruits }) => {
  return (
    <aside className="fruit-aside">
      <ul>
        <li>Selected fruits</li>
        {selectedFruits &&
          [...selectedFruits].map((fruit: Fruit) => {
            return <li key={crypto.randomUUID()}>{fruit.name}</li>;
          })}
      </ul>
    </aside>
  );
};

export default Aside;
