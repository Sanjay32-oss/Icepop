import React, { memo, useEffect } from "react";
import "../CSS/A2.css";
import ArtisanProcess from "../Components/Imagess/Mission.jpg";
import FarmIngredients from "../Components/Imagess/Search.jpg";
import ProductionFacility from "../Components/Imagess/Workspace.jpg";
import FounderStory from "../Components/Imagess/Founder.jpg";

const About2 = () => {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  return (
    <div className="about-container">
      <header className="about-header">
        <div className="header-content">
          <h1 className="main-title">SANJAY PREMIUM ICE CREAMS</h1>
          <div className="divider"></div>
          <h2 className="subtitle">Crafting Excellence Since 2025</h2>
        </div>
      </header>

      <section className="mission-statement">
        <div className="mission-content">
          <p className="mission-text">
            At Sanjay Premium Ice Creams, we redefine indulgence through
            uncompromising quality and innovative flavor craftsmanship. As a
            leader in artisanal frozen desserts, we combine time-honored
            techniques with cutting-edge technology to deliver extraordinary
            sensory experiences.
          </p>
        </div>
      </section>

      <div className="value-propositions">
        <div className="value-card">
          <div className="card-header">
            <div className="icon-circle">
              <img
                src={ArtisanProcess}
                alt="Artisan process"
                className="value-icon"
              />
            </div>
            <h3>Artisan Craftsmanship</h3>
          </div>
          <div className="card-body">
            <p>
              Each batch undergoes our proprietary 72-hour slow-churn process,
              developed by our Master Ice Cream Technologists. This meticulous
              approach ensures optimal texture and flavor development while
              preserving nutritional integrity.
            </p>
          </div>
        </div>

        <div className="value-card">
          <div className="card-header">
            <div className="icon-circle">
              <img
                src={FarmIngredients}
                alt="Farm ingredients"
                className="value-icon"
              />
            </div>
            <h3>Responsible Sourcing</h3>
          </div>
          <div className="card-body">
            <p>
              We maintain direct partnerships with 42 local farms and global
              suppliers of premium ingredients. Our vertically integrated supply
              chain guarantees traceability from source to scoop, with all
              ingredients meeting our stringent Sanjay Quality Index.
            </p>
          </div>
        </div>

        <div className="value-card">
          <div className="card-header">
            <div className="icon-circle">
              <img
                src={ProductionFacility}
                alt="Production facility"
                className="value-icon"
              />
            </div>
            <h3>Innovation Hub</h3>
          </div>
          <div className="card-body">
            <p>
              Our state-of-the-art R&D facility in Mumbai houses the industry's
              most advanced flavor development lab. Here, our team of food
              scientists and flavor architects create over 200 prototypes
              annually before selecting only 6 for commercial production.
            </p>
          </div>
        </div>

        <div className="value-card">
          <div className="card-header">
            <div className="icon-circle">
              <img
                src={FounderStory}
                alt="Founder story"
                className="value-icon"
              />
            </div>
            <h3>Corporate Legacy</h3>
          </div>
          <div className="card-body">
            <p>
              Founded by Sanjay Patel, third-generation ice cream maker, our
              company has grown from a single boutique parlour to becoming
              India's most awarded premium ice cream brand, recognized with 14
              international quality certifications.
            </p>
          </div>
        </div>
        <div className="value-card">
          <div className="card-header">
            <div className="icon-circle">
              <img
                src={FounderStory}
                alt="Founder story"
                className="value-icon"
              />
            </div>
            <h3>Management Optimization</h3>
          </div>
          <div className="card-body">
            <p>
              Founded by Sanjay Patel, third-generation ice cream maker, our
              company has grown from a single boutique parlour to becoming
              India's most awarded premium ice cream brand, recognized with 14
              international quality certifications.
            </p>
          </div>
        </div>

        <div className="value-card">
          <div className="card-header">
            <div className="icon-circle">
              <img
                src={FounderStory}
                alt="Founder story"
                className="value-icon"
              />
            </div>
            <h3>Our Legacy</h3>
          </div>
          <div className="card-body">
            <p>
              Founded by Sanjay Patel, third-generation ice cream maker, our
              company has grown from a single boutique parlour to becoming
              India's most awarded premium ice cream brand, recognized with 14
              international quality certifications.
            </p>
          </div>
        </div>
      </div>

      <section className="corporate-metrics">
        <div className="metric">
          <h4>14</h4>
          <p>International Awards</p>
        </div>
        <div className="metric">
          <h4>200+</h4>
          <p>Flavor Innovations</p>
        </div>
        <div className="metric">
          <h4>42</h4>
          <p>Farm Partnerships</p>
        </div>
        <div className="metric">
          <h4>98.7%</h4>
          <p>Customer Satisfaction</p>
        </div>
      </section>
    </div>
  );
};

export default memo(About2);
