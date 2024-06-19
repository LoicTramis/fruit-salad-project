import { useContext } from "react";
import { SelectedFruitsContext } from "../../App";
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

const Aside = ({ fruits }) => {
  const { selectedFruits } = useContext(SelectedFruitsContext);

  return (
    <aside className="fruit-aside">
      <h3>Selected fruits</h3>
      <ul>
        {selectedFruits &&
          [...selectedFruits].map((fruitMap: number) => {
            const foundFruit = fruits.find((fruitFind: Fruit) => fruitFind.id === fruitMap);
            return <li key={foundFruit.id}>{foundFruit.name}</li>;
          })}
      </ul>
    </aside>
  );
};

export default Aside;
