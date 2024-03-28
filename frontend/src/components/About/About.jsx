import { useState } from "react";
import about from "./about.svg";
import NavBar from "../NavBar/NavBar";
import "./About.css";

// import { FAQs } from "../constants";
// import { aboutContent } from "../constants";

// import FAQ from "../components/FAQ";

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
    <NavBar />
    <div className="container">
      <h2 className="heading-text">About Us!</h2>
      <img className="display-img-md mbottom10" src={about} />
      <h3 className="subheading-text">Welcome to Canteen Management System</h3>
      <div className="content">
     
      <p>
      Canteen Management is dedicated to optimizing both dine-in and takeaway experiences for canteens across various institutions, organizations, and workplaces. Our focus is on ensuring that every aspect of the dining and takeaway process runs smoothly and efficiently, catering to the diverse needs of our clients and their customers.
      </p>
      <p>
      In addition to its customer-facing features, Canteen Management also provides a comprehensive dashboard tailored for canteen owners and managers. This dashboard offers a centralized hub for monitoring and managing various aspects of canteen operations, empowering owners with valuable insights and control over their business.
      Through the owner dashboard, canteen owners can access real-time data on sales performance, inventory levels, and customer feedback. Visualizations and customizable reports provide at-a-glance summaries of key metrics, allowing owners to quickly assess business health and identify areas for improvement.      </p>
      <p>
      Our flexible payment solutions cater to diverse customer preferences, while loyalty programs and discounts encourage repeat business and customer engagement. Through robust inventory management and detailed reporting, operators gain valuable insights to make data-driven decisions and optimize operations. Mobile accessibility ensures that customers can easily place orders and track deliveries, while stringent security measures protect sensitive data and ensure compliance with industry regulations. With Canteen Management, canteens can elevate both dine-in and takeaway experiences, enhancing efficiency, convenience, and overall satisfaction for patrons and operators alike.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>Continuous Improvement: We are constantly evolving and enhancing our solutions to stay ahead of industry trends and meet the evolving needs of our clients.</li>
        <li>Cost-Effective: Our solutions are designed to deliver maximum value at an affordable price point, ensuring a high return on investment.</li>
        <li>User-Friendly Interface: With intuitive features and easy-to-navigate interfaces, our software simplifies the dine-in experience for both operators and customers.</li>
        <li>Scalability: Whether you operate a small canteen or a large-scale cafeteria, our solutions are scalable to accommodate your specific needs and requirements.</li>

      </ul>
      {/* <p>
        At Canteen Management System, our mission is to empower canteen administrators with powerful tools, actionable insights, and unparalleled support. Whether you're looking to streamline operations, improve customer satisfaction, or drive business growth, we're here to help you achieve your goals with efficiency and excellence.
      </p>
      <p>
        Join us in transforming the way canteens operate. Experience the difference with Canteen Management System today.
      </p> */}
    </div>



      {/* <div className="FAQ">
        <h3 className="subheading-text mtop10">Frequently Asked Questions</h3>
        
      </div> */}
    </div>
    </div>
  );
};

export default About;