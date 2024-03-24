import { useState } from "react";
import about from "./about.svg";

// import { FAQs } from "../constants";
// import { aboutContent } from "../constants";

// import FAQ from "../components/FAQ";

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="container">
      <h2 className="heading-text">About Us!</h2>
      <img className="display-img-md mbottom10" src={about} />
      <h3 className="subheading-text">Jainam</h3>
      <p className="paragraph">Jainam</p>

      <div className="FAQ">
        <h3 className="subheading-text mtop10">Frequently Asked Questions</h3>
        
      </div>
    </div>
  );
};

export default About;