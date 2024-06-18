import React from "react";

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
    <aside>
      <ul>
        {selectedFruits.map((fruit: Fruit) => {
          return <li key={crypto.randomUUID()}>{fruit.name}</li>;
        })}
      </ul>
    </aside>
  );
};

export default Aside;
