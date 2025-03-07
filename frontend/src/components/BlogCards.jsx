import React from "react";

import cloudComputing1 from "../assets/images/blogs/cloudComputing1.png";
import cloudComputing2 from "../assets/images/blogs/cloudComputing2.png";
import cloudComputing3 from "../assets/images/blogs/cloudComputing3.jpg";
import Iot from "../assets/images/blogs/Iot.png";

const BlogCards = () => {
  const blogs = [
    {
      id: 1,
      title: "Cloud Computing",
      description:
        "Cloud computing emerged as a game-changer in the early 2000s, with major players like Amazon...",
      image: cloudComputing1,
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      description:
        "AI continues to redefine industries, from healthcare to transportation, with new breakthroughs...",
      image: cloudComputing2,
    },
    {
      id: 3,
      title: "Blockchain Technology",
      description:
        "Blockchain has transformed digital transactions, ensuring security and transparency...",
      image: cloudComputing3,
    },
    {
      id: 4,
      title: "Internet of Things (IoT)",
      description:
        "IoT is connecting devices globally, enabling automation and real-time data insights...",
      image: Iot,
    },
  ];

  return (
    <div className="bg-cDarkBlue text-white py-12 px-4 sm:px-8 font-inter">
      <h4 className="text-center text-sm text-cWhite mb-3">OUR BLOG</h4>
      <h2 className="text-center text-2xl text-cWhite font-bold mb-8">
        Latest Blog & Articles
      </h2>
      <div className="flex flex-col items-center gap-6">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href="#"
            className="bg-CcradColor text-black border border-[#5D65CA] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-CPurple w-full max-w-4xl flex flex-col sm:flex-row"
          >
            {/* Left: Image */}
            <div className="w-full sm:w-1/3 flex justify-center items-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover sm:object-center sm:mx-0 mx-auto"
              />
            </div>
            {/* Right: Content */}
            <div className="w-full sm:w-2/3 p-4">
              <h4 className="text-sm text-textGray mb-4">Blog</h4>
              <h3 className="font-semibold text-cWhite text-lg">
                {blog.title}
              </h3>
              <p className="text-sm font-normal text-cgray mt-2">
                {blog.description}
              </p>
              <div className="mt-8 text-cWhite font-semibold text-sm">
                READ MORE →
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
