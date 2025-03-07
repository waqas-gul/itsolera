import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Loader";

const categories = [
  "Economic Growth",
  "Medical Field",
  "Clean Water",
  "Quality Education",
  "Climate Action",
  "Gender Equality",
  "Industry",
  "Peace & Justice",
  "Innovative & Infrastructure",
  "Responsible Consumption",
];

const ProductsCategories = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state
  const itemsPerPage = 3; // Display 4 products per page

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://62.72.57.47:8080/api/products");
      setProducts(response.data);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Failed to fetch products",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:mx-24 font-inter">
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="block lg:hidden mb-4">
            <h3 className="text-lg font-bold text-cDarkBlue mb-2 m-6">
              Categories :
            </h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {categories.map((category) => (
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
            <div className="flex flex-col w-full  lg:w-1/4 p-4 rounded-lg">
              <div className="hidden lg:block ">
                <h3 className="text-lg font-bold text-cDarkBlue mb-4">
                  Categories:
                </h3>
                {categories.map((category) => (
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
              <div className="space-y-8">
                {paginatedProducts.map((product) => (
                  <div
                    key={product._id}
                    className="flex flex-col md:flex-row items-center bg-cWhite rounded-2xl shadow-lg hover:shadow-CPurple hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Left Side - Text Content */}
                    <div className="lg:w-[320px] md:w-1/3 lg:h-80 md:h-auto">
                      <img
                        src={`http://62.72.57.47:8080/${product.image}`}
                        alt={""}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-cDarkBlue mb-2">
                        {product.name}
                      </h3>
                      <p className="text-CPurple text-lg">
                        {product.description}
                      </p>
                    </div>

                    {/* Right Side - Image */}
                  </div>
                ))}
              </div>

              {/* Pagination remains same */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 gap-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                        currentPage === index + 1
                          ? "bg-indigo-600 text-white shadow-lg"
                          : "bg-textGray text-cWhite hover:bg-indigo-50"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsCategories;
