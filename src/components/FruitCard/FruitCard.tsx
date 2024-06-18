import React, { useEffect, useRef, useState } from "react";
import "./FruitCard.css";
import { Link } from "react-router-dom";
import ColorThief from "colorthief";

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

const FruitCard = ({ fruit, selectedFruits, setSelectedFruits }) => {
  const [image, setImage] = useState(null);
  const [imageColor, setImageColor] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef(null);
  const colorThief = new ColorThief();

  const fetchImage = async () => {
    try {
      const imageSrc = await import(`../../assets/images/${fruit.name}.png`);
      setImage(imageSrc.default);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAddFruit = (fruit: Fruit) => {
    setSelectedFruits([...selectedFruits, fruit]);
  };

  const handleImageLoad = () => {
    if (imageRef.current && imageRef.current.complete) {
      const color = colorThief.getColor(imageRef.current);
      setImageColor(`rgb(${color.join(",")})`);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <article onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="fruit-card">
      {isHovering && (
        <section
          className="fruit-add"
          style={{ border: `1px solid ${imageColor}`, borderRadius: "10px", boxShadow: `0px 0px 10px ${imageColor}` }}>
          <p>
            Add <span style={{ color: imageColor }}>{fruit.name}</span>
          </p>
          <button className="circle" onClick={() => handleAddFruit(fruit)}>
            <div className="add">+</div>
          </button>
          <Link to={`/fruits/${fruit.id}`}>More details</Link>
        </section>
      )}
      <h4>{fruit.name}</h4>
      <img ref={imageRef} className="fruit-image" onLoad={handleImageLoad} src={image} alt={fruit.name} />
    </article>
  );
};

export default FruitCard;