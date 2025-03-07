import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Cloud Computing",
      description:
        "Cloud Computing emerged as a game-changer in the early 2000s, with major players like Amazon...",
      image: "images/newsAndEvents/blog1.svg", // Replace with your image URL
    },
    {
      id: 2,
      title: "Cybersecurity",
      description:
        "Cybersecurity became a critical focus in the 21st century, with increased reliance on digital systems driving innovations in encryption...",
      image: "images/newsAndEvents/blog2.svg",
    },
    {
      id: 3,
      title: "Artificial Intelligence (AI)",
      description:
        "Artificial Intelligence gained momentum in the late 2010s, transforming industries with advancements in machine learning...",
      image: "images/newsAndEvents/blog3.svg",
    },
    {
      id: 4,
      title: "Web Development",
      description:
        "Web development revolutionized the way we interact with technology, with the rise of dynamic websites and frameworks like...",
      image: "images/newsAndEvents/blog4.svg",
    },
  ];

  return (
    <Link to={"/blogSection"}>
      <div className="px-4 sm:px-8 lg:px-24 py-8 font-inter">
        <h2 className="text-3xl font-bold text-cBlack p-4 mb-6 text-center">
          Our <span className="text-indigo-600">Latest Blog & Articles</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-cWhite rounded-lg shadow-md hover:shadow-CPurple overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg block"
            >
              <div className="h-40 flex items-center justify-center  overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-CPurple font-semibold">Blog</span>
                <h3 className="text-lg font-semibold text-cDarkBlue mt-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                <span className="text-CcradColor hover:text-CPurple font-medium text-sm mt-4 inline-block">
                  READ MORE →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogSection;
