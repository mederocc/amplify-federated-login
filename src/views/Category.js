import React, { useRef, useEffect, useState } from "react";
import CardsContainer from "../components/CardsContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import classes from "./Category.module.css";

function Category({ category }) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const cardRef = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) setIsIntersecting(true);
    },
    {
      threshold: 0.7, // Trigger when 70% is visible
    }
  );

  useEffect(() => {
    observer.observe(cardRef.current); // eslint-disable-next-line
  }, []);

  return (
    <div
      id={
        category.id
          ? category.id.replace(" ", "_")
          : category.title.replace(" ", "_")
      }
      ref={cardRef}
      className={`${classes["outer-category-container"]} ${
        category.links.length < 4 && classes["shorter-margin"]
      }`}
    >
      <div className={classes["category-container"]}>
        <DescriptionContainer
          title={category.title}
          message={category.message}
          description={category.description}
          show={isIntersecting}
          image={category.image}
        />
        <CardsContainer links={category.links} show={isIntersecting} />
      </div>
    </div>
  );
}

export default Category;
