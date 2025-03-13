import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/products/${id}`);
        const product = response.data;
        setFormData({
          category: product.category,
          name: product.name,
          image: null,
        });
        setPreviewImage(`${BACKEND_URL}/${product.image}`);
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "Failed to fetch product details",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };
    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category", formData.category);
    data.append("name", formData.name);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      await axios.put(`${BACKEND_URL}/api/products/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire({
        title: "Success!",
        text: "Product updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/products");
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: `Error updating product: ${err.message}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 p-4 font-inter">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-cDarkBlue mb-6">
          Edit Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-textGray">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleInputChange}
              className="mt-1 w-3/4 p-2 border border-CPurple  w-[300px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-textGray">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 w-3/4 p-2 border rounded-lg border-CPurple  w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-textGray">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="mt-1 w-3/4 p-2 border rounded-lg border-CPurple  lg:w-[300px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {previewImage && (
            <div className="mt-4 flex items-center justify-center">
              <img
                src={previewImage}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 bg-cDarkBlue hover:bg-cWhite border border-cDarkBlue hover:text-cDarkBlue text-cWhite p-2 rounded-lg font-semibold shadow-md transition-all duration-300"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
