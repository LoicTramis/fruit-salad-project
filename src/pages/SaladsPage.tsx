import { useContext } from "react";
import { Link } from "react-router-dom";
import { SelectedFruitsContext } from "../App";
import Aside from "../components/Aside/Aside";
import "./SaladsPage.css";

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

const SaladsPage = ({ fruits }) => {
  const { selectedFruits } = useContext(SelectedFruitsContext);

  return (
    <div className="content-page">
      <Aside fruits={fruits} />
      <main className="salads-content">
        <h2>My salad</h2>
        {selectedFruits.size === 0 && (
          <p className="no-fruit-message">
            <Link to="/fruits">Add fruits</Link> to make your salad
          </p>
        )}
        {selectedFruits.size !== 0 && (
          <>
            <article className="salads-ingredients">
              <h3>Ingredients</h3>
              <ul>
                {selectedFruits &&
                  [...selectedFruits].map((fruitMap: number) => {
                    const foundFruit = fruits.find((fruitFind: Fruit) => fruitFind.id === fruitMap);
                    return <li key={foundFruit.id}>{foundFruit.name}</li>;
                  })}
              </ul>
            </article>
            <article className="salads-ingredients">
              <h3>Nutrional value</h3>
              <ul className="salads-nutriments">
                <li>
                  <h4>Maccro</h4>
                  <section>
                    <p>Carbohydrate</p>
                    <p>Protein</p>
                    <p>Fat</p>
                  </section>
                </li>
                <li>
                  <h4>Micro</h4>
                  <section>
                    <p>Vitamins</p>
                    <p>Minerals</p>
                    <p>Oligo-elements</p>
                  </section>
                </li>
              </ul>
            </article>
          </>
        )}
      </main>
    </div>
  );
};

export default SaladsPage;
