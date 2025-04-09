import React, { memo, useEffect } from "react";
import "../CSS/A2.css";
import Mission from "../Components/Imagess/Mission.jpg";
import Quality from "../Components/Imagess/Search.jpg"; // Changed from Search to Quality
import Workspace from "../Components/Imagess/Workspace.jpg";

const About2 = () => {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  return (
    <>
      <section className="about-hero">
        <h1 id="DD1">OUR SWEET STORY</h1>
        <p className="pk">
          Welcome to Mr. Sanjay's Artisanal Ice Cream, where passion meets
          flavor in every scoop. Since 2023, we've been crafting premium,
          handcrafted ice creams using only the finest natural ingredients. From
          classic vanilla to exotic seasonal specialties, each batch is made
          with love and attention to detail that you can taste in every bite.
        </p>
      </section>

      <div id="Containergs">
        <div className="count1">
          <h1 className="count12">Our Promise</h1>
          <img
            src={Mission}
            alt="Artisan ice cream making"
            style={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
              display: "block",
              margin: "0 auto",
              objectFit: "cover",
            }}
          />
          <p className="p1">
            We promise to never compromise on quality. Our ice creams are made
            in small batches with 100% natural ingredients—real cream, fresh
            fruits, and premium chocolates. No artificial flavors, no
            preservatives, just pure, honest ingredients that create
            unforgettable taste experiences. Every scoop tells the story of our
            commitment to excellence.
          </p>
        </div>

        <div className="count1">
          <h1 className="count12">Our Ingredients</h1>
          <img
            src={Quality}
            alt="Fresh ingredients for ice cream"
            style={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
              display: "block",
              margin: "0 auto",
              objectFit: "cover",
            }}
          />
          <p className="p1">
            We source locally whenever possible, supporting regional farmers and
            producers. Our milk comes from happy, grass-fed cows, our fruits are
            picked at peak ripeness, and our flavors are inspired by global
            traditions. From Himalayan berries to Kerala vanilla, we celebrate
            India's incredible biodiversity in every flavor we create.
          </p>
        </div>

        <div className="count1">
          <h1 className="count12">Our Craft</h1>
          <img
            src={Workspace}
            alt="Ice cream production"
            style={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
              display: "block",
              margin: "0 auto",
              objectFit: "cover",
            }}
          />
          <p className="p1">
            Our production kitchen is where magic happens. Using traditional
            techniques with modern precision, we churn our ice creams slowly to
            achieve the perfect texture. Each flavor is developed through
            extensive testing until we achieve perfection. Our team of flavor
            artisans takes pride in creating innovative combinations while
            respecting classic favorites.
          </p>
        </div>

        <div className="count1">
          <h1 className="count12">Our Journey</h1>
          <img
            src={Workspace}
            alt="Ice cream shop"
            style={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
              display: "block",
              margin: "0 auto",
              objectFit: "cover",
            }}
          />
          <p className="p1">
            What began as a small family recipe book in 2023 has blossomed into
            a beloved local institution. From our first tiny shop to becoming
            the go-to destination for ice cream lovers, our growth has been
            driven by one simple principle: make ice cream you'd be proud to
            serve your own family. Today, we continue that tradition with every
            scoop we serve.
          </p>
        </div>
      </div>
    </>
  );
};

export default memo(About2);
