import { useGetFourProductsQuery } from "@/Redux-Toolkit/ApiSlice/Product";
import React from "react";
import { Link } from "react-router";

const Section4 = () => {
  const { data: fourproduct, isLoading } = useGetFourProductsQuery();

  return (
    <div className="container font-jost">
      <div className="header">
        <p className="sub-header font-light">OUR MODERN SHOP</p>
        <h1 className="main-header text-3xl">Welcome To Emall Site</h1>
      </div>
      <div className="card-container flex">
        {fourproduct?.map((section, index) => (
          <div key={index} className="card font-jost">
            <div className="card-image-wrapper">
              <div>
                <Link to="/">
                  <img
                    src="https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/05/5-2-675x842.jpg"
                    alt={section.subcategory}
                    className="card-image hover:rotate-2 hover:scale-110"
                  />
                </Link>
              </div>
            </div>
            <div className="card-content">
              <h2 className="card-title text-xl !text-center pt-2">{section.name}</h2>
              <p className="card-description font-light p-2">
                {section.category}
              </p>
              <span className="card-link font-medium p-2">
                ${section.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
