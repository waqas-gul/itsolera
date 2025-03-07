import React from "react";
import {
  FaShieldAlt,
  FaRobot,
  FaHeadset,
  FaCloud,
  FaServer,
} from "react-icons/fa";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      category: "Cybersecurity Solutions",
      title: "FortiAccess",
      icon: <FaShieldAlt className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Streamline identity and access management with our comprehensive IAM platform, providing centralized control and visibility for user authentication and authorization.",
    },
    {
      id: 2,
      category: "Cybersecurity Solutions",
      title: "FortiAccess",
      icon: <FaShieldAlt className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Streamline identity and access management with our comprehensive IAM platform, providing centralized control and visibility for user authentication and authorization.",
    },
    {
      id: 3,
      category: "Artificial Intelligence",
      title: "PredictPro",
      icon: <FaRobot className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Harness the power of predictive analytics to forecast trends and outcomes with precision, driving data-informed decision-making and strategic planning.",
    },
    {
      id: 4,
      category: "Artificial Intelligence",
      title: "ChatBotIQ",
      icon: <FaHeadset className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Boost customer engagement with AI-powered chatbots that understand natural language and deliver personalized responses and recommendations.",
    },
    {
      id: 5,
      category: "Cloud Services & Solutions",
      title: "CloudCommander",
      icon: <FaCloud className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Simplify cloud operations and optimize resource use with our intuitive management platform, offering centralized monitoring, automation, and governance across multi-cloud environments.",
    },
    {
      id: 6,
      category: "Cloud Services & Solutions",
      title: "ServerGenie",
      icon: <FaServer className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Effortlessly build and deploy serverless applications with our framework, providing seamless scalability and cost-efficiency without the complexities of server management.",
    },
  ];

  return (
    <div className="bg-cDarkBlue text-white py-16 px-4 font-inter sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="uppercase text-sm font-semibold text-cWhite mb-4">
            Products
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-cWhite leading-tight mb-6">
            Innovative Products by ITSOLERA
          </h2>
          <p className="text-sm sm:text-base text-cWhite mb-6 max-w-3xl mx-auto">
            Explore ITSOLERA's suite of cutting-edge products designed to
            address the challenges of the modern IT landscape. With advanced
            features, our solutions deliver exceptional performance,
            reliability, and precision.
          </p>
          <button className="bg-gradient-to-r from-cBlack to-CPurple text-cWhite font-medium py-2 px-6 rounded shadow-lg hover:opacity-90">
            All Services
          </button>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {/* Group by Category */}
          {[
            "Cybersecurity Solutions",
            "Artificial Intelligence",
            "Cloud Services & Solutions",
          ].map((category) => (
            <div key={category}>
              <h4 className="text-xl sm:text-2xl font-bold text-cWhite mb-6">
                {category}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-cWhite text-cDarkBlue p-6 rounded-md shadow-lg hover:shadow-CPurple transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="flex items-center mb-4">
                        {product.icon}
                        <h5 className="text-lg font-bold">{product.title}</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
