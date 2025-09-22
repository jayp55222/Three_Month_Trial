import React from "react";
import { Link } from "react-router";

const Section3 = () => {
  const array = [
    {
      imageSrc:
        "https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/03/img-1-demo-01.jpg",
      altText: "A woman in a stylish outfit",
      title: "New Styles For Women",
      description:
        "Find the new styles on our store that is best quality, best service",
      linkText: "SHOP NOW",
    },
    {
      imageSrc:
        "https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/03/img-2-demo-01.jpg",
      altText: "A man in a trendy t-shirt",
      title: "Men’s Trending Clothes",
      description:
        "Up to 30% off on all men’s trending clothes, follow the rhythem in your life",
      linkText: "SHOP NOW",
    },
  ];

  return (
    <>
      <div className="container font-jost">
        <div className="header">
          <p className="sub-header font-light">OUR MODERN SHOP</p>
          <h1 className="main-header text-3xl">Welcome To Emall Site</h1>
        </div>
        <div className="card-container flex">
          {array.map((section, index) => (
            <div key={index} className="card">
              <div className="card-image-wrapper">
                <div>

                <img
                  src={section.imageSrc}
                  alt={section.altText}
                  className="card-image hover:rotate-2 hover:scale-110"
                  />
                  </div>
              </div>
              <div className="card-content">
                <h2 className="card-title text-3xl p-4">{section.title}</h2>
                <p className="card-description font-light p-2">{section.description}</p>
                <Link to="/" className="card-link font-medium p-2">
                  {section.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
