import React from "react";
import product from "../../assets/images/ourProducts/product.png";

const ProductsSection = () => {
  return (
    <div className="w-full font-inter">
      {/* Upper Section: Image */}
      <div className="w-full  h-[10vh]  lg:h-[60vh] ">
        <img
          src={product}
          alt="Our Products"
          className=" inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Lower Section: Content */}
      <div className="w-full px-4 py-8 mt-28  mx-12 sm:px-8 sm:py-10 lg:px-16 lg:py-12 bg-white ">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
          Innovative Products by{" "}
          <span className="text-cDarkBlue">ITSOLERA</span>:
        </h2>
        <p className="text-cBlack text-sm sm:text-base mx-4 text-justify lg:text-lg leading-relaxed ">
          Discover a world of innovation with ITSOLERA’s range of cutting-edge
          products, meticulously crafted to meet the diverse needs and
          challenges of the modern IT landscape. From powerful software
          solutions to advanced hardware devices, each product is designed with
          precision, reliability, and performance in mind, empowering businesses
          and individuals to thrive in the digital era.
        </p>
      </div>
    </div>
  );
};

export default ProductsSection;
