import React, { memo, useEffect } from "react";
import "../CSS/A2.css";
import Mission from "../Components/Imagess/Mission.jpg";
import Search from "../Components/Imagess/Search.jpg";
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
      <section>
        7<h1 id="DD1">ABOUT PAGE</h1>
        <p className="pk">
          Welcome to MR. SANJAY, where passion meets innovation. Since our
          founding in 2023, we have been dedicated to delivering Ice Cream with
          a commitment to quality, integrity, and customer satisfaction. We
          provides Good Quality of Ice Creams and provide all types of Ice Cream
          Flavours in our site. brand with a strong community" in innovation,"
          "a customer-focused brand with a strong community".
        </p>
      </section>

      <div id="Containergs">
        <div className="count1">
          <h1 className="count12">Our Mission</h1>
          <img
            src={Mission}
            alt="Mission"
            style={{
              borderRadius: "50%",
              height: "20%",
              width: "30%",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p className="p1">
            To [your mission statement, e.g., "empower businesses with
            cutting-edge technology," "deliver sustainable and high-quality
            products," "provide seamless solutions for everyday challenges"].
            brand with a strong community" in innovation," "a customer-focused
            brand with a strong community"].
          </p>
        </div>

        <div className="count1">
          <h1 className="count12">Our Vision</h1>
          <img
            src={Search}
            alt="Search"
            style={{
              borderRadius: "50%",
              height: "20%",
              width: "30%",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p className="p1">
            We envision a future where [describe your vision, e.g., "technology
            enhances lives effortlessly," "sustainability becomes a global
            priority," "every customer experiences unparalleled service"]. brand
            with a strong community" in innovation," "a customer-focused brand
            with a strong community"].
          </p>
        </div>

        <div className="count1">
          <h1 className="count12">Our WorkSpace</h1>
          <img
            src={Workspace}
            alt="Workspace"
            style={{
              borderRadius: "50%",
              height: "20%",
              width: "30%",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p className="p1">
            A productive and inspiring environment is key to our success. Our
            office space is designed to encourage creativity, collaboration, and
            efficiency. With modern workstations, open discussion areas, and
            innovation hubs, we create a thriving workplace culture.
          </p>
        </div>

        <div className="count1">
          <h1 className="count12">Our Journey</h1>
          <img
            src={Workspace}
            alt="Workspace"
            style={{
              borderRadius: "50%",
              height: "20%",
              width: "30%",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p className="p1">
            From a humble beginning in [year], we have grown into [describe your
            growth, e.g., "an industry leader with a global presence," "a
            trusted name brand with a strong community" brand with a strong
            community" in innovation," "a customer-focused brand with a strong
            community"].
          </p>
        </div>
      </div>
    </>
  );
};

export default memo(About2);
