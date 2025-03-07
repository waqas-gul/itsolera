import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Refs for form inputs
  const categoryRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
      fetchProducts();
    }
  }, [navigate]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Failed to fetch products",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get data from refs
    const category = categoryRef.current.value;
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.files[0];

    // Validation for empty fields
    if (!category || !name || !description || (!image && !editProductId)) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required. Please fill in all fields before submitting.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const data = new FormData();
    data.append("category", category);
    data.append("name", name);
    data.append("description", description);
    if (image) {
      data.append("image", image);
    }

    const url = editProductId
      ? `http://localhost:5000/api/products/${editProductId}`
      : "http://localhost:5000/api/products";
    const method = editProductId ? "put" : "post";

    try {
      const token = localStorage.getItem("token");
      await axios[method](url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts();

      // Clear form inputs
      categoryRef.current.value = "";
      nameRef.current.value = "";
      descriptionRef.current.value = "";
      imageRef.current.value = "";
      setEditProductId(null);

      // Edit alert without "OK" button (closes automatically)
      Swal.fire({
        title: editProductId ? "Product Updated!" : "Product Added!",
        text: editProductId
          ? "Your product has been updated successfully."
          : "Your product has been added successfully.",
        icon: "success",
        timer: 1500, // Automatically close after 1.5 seconds
        showConfirmButton: false, // Hide the "OK" button
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = (product) => {
    categoryRef.current.value = product.category;
    nameRef.current.value = product.name;
    descriptionRef.current.value = product.description;
    setEditProductId(product._id);

    // Scroll to "Manage Products" heading
    const manageProductsHeading = document.getElementById("manage-products");
    if (manageProductsHeading) {
      manageProductsHeading.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDelete = async (id) => {
    // Delete confirmation alert with "Cancel" and "Sure" buttons
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Sure",
      cancelButtonText: "No Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:5000/api/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchProducts();
        Swal.fire({
          title: " Deleted!",
          text: "Product deleted successfully!",
          icon: "success",
          timer: 1500, // Automatically close after 1.5 seconds
          showConfirmButton: false, // Hide the "OK" button
        });
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please login first</h1>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 mx-4 sm:mx-8 md:mx-12 lg:mx-24">
      <h1
        className="text-2xl font-bold mb-6 text-cDarkBlue text-center"
        id="manage-products"
      >
        Manage Products
      </h1>

      {/* Form Section */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-cWhite p-6 rounded-lg shadow-md w-full lg:w-[600px] sm:w-[400px] mx-auto"
        >
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-cDarkBlue text-2xl font-bold">
              {editProductId ? "Edit Product" : "Add Product"}
            </h2>
            <div className="w-full flex flex-col  gap-4">
              <input
                ref={categoryRef}
                type="text"
                name="category"
                placeholder="Category"
                className="lg:w-[500px] [300px] p-3 border border-CPurple rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Product Name"
                className="sm:[300px]  lg:w-[500px] p-3 border border-CPurple rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                ref={descriptionRef}
                placeholder="Description"
                className="sm:[300px]  lg:w-[500px] p-3 border border-CPurple rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                ref={imageRef}
                type="file"
                name="image"
                className="lg:w-[500px] sm:[300px] p-3 border border-CPurple bg-cWhite rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={!editProductId}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-CPurple border border-CPurple text-cWhite p-3 hover:text-CPurple rounded hover:bg-cWhite"
            >
              {editProductId ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>

      {/* Products Grid */}
      <div className="my-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-cWhite rounded-lg py-4 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="h-40 w-full rounded mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={`http://localhost:5000/${product.image}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 text-center px-4">
              {product.description}
            </p>
            <p className="text-sm text-gray-600 text-center">
              {product.category}
            </p>

            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-cDarkBlue text-cWhite border border-cDarkBlue hover:text-cDarkBlue px-3 py-1 rounded hover:bg-cWhite"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-CPurple text-cWhite px-3 py-1 rounded border border-CPurple hover:bg-cWhite hover:text-CPurple"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
