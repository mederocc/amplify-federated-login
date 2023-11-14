import React, { useState, useEffect, useRef } from "react";
import Category from "../views/Category";
import Mission from "../views/Mission";
import categories from "../categories";
import Banner from "../components/Banner";
import Herramientas from "../views/Herramientas";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  // Function to handle visibility change
  const handleVisibilityChange = (entries) => {
    // console.log("isIntersecting", entries[0].isIntersecting);

    if (entries[0].isIntersecting) {
      // The component is visible in the viewport

      // console.log("loaded", true);
      setImageLoaded(true);
    } else if (entries[0].isIntersecting === false) {
      // console.log("loaded", false);

      // The component is not visible in the viewport
      setImageLoaded(false);
    }
  };

  useEffect(() => {
    // console.log("home component mounted");
    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.5,
    });
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-container">
      <div className="landing-container" id="Home">
        <div
          ref={imageRef}
          className={`image-container ${imageLoaded ? "loaded" : ""}`}
        >
          <img
            src="images/argentina-from-space.png"
            alt="world background"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="hero">
          <div className="team-banner">Crop Science</div>
          <div className="title">Cono Sur Row Crops Manufacturing</div>
          <div className="subtitle">
            Portal de gestión y operación de Producción de Semillas de Argentina
          </div>
          <div className="logo-container">
            <a href="#mission">
              <img src="logo192.png" alt="logo" />
              <div className="logo-text">
                <div>Data</div>
                <div>Intelligence</div>
              </div>
            </a>
          </div>
          <div className="vertical-line"></div>
          <div className="powered">
            Powered by<span> Production Strategy</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "50vh",
            maxWidth: "1287px",
          }}
        ></div>
      </div>

      <div className="category-scroll">
        <Mission />
        <Banner section="Reportes Regionales" id="Regional" />
        {categories["Regional"].map((category, index) => (
          <Category key={index} category={category} />
        ))}
        <Banner section="Reportes Globales" id="Global" topSpacing={true} />
        {categories["Global"].map((category, index) => (
          <Category key={index} category={category} />
        ))}
        <Herramientas data={categories["Herramientas"]} />
      </div>

      <div className="restricted">RESTRICTED</div>
    </div>
  );
};

export default Home;
