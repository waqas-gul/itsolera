import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsCategories = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    "Economic Growth (SDG-08)"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch all products
  const fetchProducts = async () => {
    const response = await axios.get("http://localhist:8080/api/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:mx-24 font-inter">
      <div className="block lg:hidden mb-4">
        <h3 className="text-lg font-bold text-cDarkBlue mb-2 m-6">
          Categories:
        </h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {[
            "Economic Growth (SDG-08)",
            "Medical Field (SDG-03)",
            "Clean Water (SDG-06)",
            "Quality Education (SDG-04)",
          ].map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`flex-shrink-0 px-4 py-2 my-4 rounded-lg shadow-md text-sm font-medium ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start">
        <div className="flex flex-col w-full lg:w-1/4 p-4 rounded-lg">
          <div className="hidden lg:block">
            <h3 className="text-lg font-bold text-cDarkBlue mb-4">
              Categories:
            </h3>
            {[
              "Economic Growth (SDG-08)",
              "Medical Field (SDG-03)",
              "Clean Water (SDG-06)",
              "Quality Education (SDG-04)",
            ].map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 hover:shadow-lg transition cursor-pointer mb-3 border-b pt-3 pb-2 border-cDarkBlue"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className="form-radio accent-cDarkBlue"
                />
                <span className="text-base font-semibold text-cBlack">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product._id}
                className="bg-cWhite rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={`http://localhist:8080/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base text-center font-semibold text-gray-800">
                  {product.name}
                </h4>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCategories;
