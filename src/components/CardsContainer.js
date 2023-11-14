import React, { useEffect, useState } from "react";
import Card from "./Card";
import classes from "./CardsContainer.module.css";

function CardsContainer({ links, show }) {
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [prevArrowClicked, setPrevArrowClicked] = useState(false);
  const [nextArrowClicked, setNextArrowClicked] = useState(false);

  const totalPages = Math.ceil(links.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentLinks = links.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        setPrevArrowClicked(true);
        goToPreviousPage();
        setTimeout(() => setPrevArrowClicked(false), 200);
      } else if (event.key === "ArrowRight") {
        setNextArrowClicked(true);
        goToNextPage();
        setTimeout(() => setNextArrowClicked(false), 200);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
    // eslint-disable-next-line
  }, [currentPage]);

  const prevArrowClass =
    currentPage === 1 ? classes.arrowDisabled : classes.arrow;
  const nextArrowClass =
    currentPage === totalPages ? classes.arrowDisabled : classes.arrow;

  return (
    <div className={classes["links-container"]}>
      <div className={classes["cards-container"]}>
        {currentLinks.map((entry, index) => (
          <Card
            show={show}
            index={index}
            key={index}
            title={entry.title}
            subtitle={entry.subtitle}
            link={entry.link}
            icon={entry.icon}
          />
        ))}
      </div>
      {links.length > 4 ? (
        <div
          className={`${classes["arrow-container"]} ${
            show ? "" : classes["arrow-hidden"]
          }`}
        >
          <div
            className={`${prevArrowClass} ${
              prevArrowClicked && !(currentPage === 1)
                ? classes["arrow-clicked"]
                : ""
            }`}
            onClick={() => {
              setPrevArrowClicked(true);
              goToPreviousPage();
              setTimeout(() => setPrevArrowClicked(false), 200); // Revert back after a short delay
            }}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 256 512"
            >
              <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
            </svg>
          </div>

          <div
            className={`${nextArrowClass} ${
              nextArrowClicked && !(currentPage === totalPages)
                ? classes["arrow-clicked"]
                : ""
            }`}
            onClick={() => {
              setNextArrowClicked(true);
              goToNextPage();
              setTimeout(() => setNextArrowClicked(false), 200); // Revert back after a short delay
            }}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 256 512"
            >
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
            </svg>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CardsContainer;
