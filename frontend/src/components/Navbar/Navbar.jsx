import { useState } from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import itsoler from "../../assets/images/Itsolera.svg";
const menuItems = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "ABOUT",
    url: "/about",
  },
  {
    title: "SERVICES",
    url: "/services",
    submenu: [
      {
        title: "Cyber Security",
        url: "cyber",
      },
      {
        title: "Artificial Intelligence",
        url: "Artificial",
      },
      {
        title: "Digital Marketing",
        url: "digital-marketing",
      },
      {
        title: "Software Development",
        url: "#",
      },
      {
        title: "Graphic Designing",
        url: "#",
      },
    ],
  },
  {
    title: "TRAINING",
    url: "/training",
    submenu: [
      {
        title: "Cyber Security",
        url: "#",
      },
      {
        title: "Artificial Intelligence",
        url: "training/ai",
      },
      {
        title: "Digital Marketing",
        url: "#",
      },
      {
        title: "Software Development",
        url: "#",
      },
      {
        title: "Graphic Designing",
        url: "#",
      },
    ],
  },
  {
    title: "PRODUCTS",
    url: "/OurProducts",
  },
  {
    title: "NEWS & EVENTS",
    url: "/newsAndEvents",
  },
  {
    title: "BLOGS",
    url: "/blogSection",
  },
  {
    title: "CONTACT US",
    url: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4 w-full text-sm font-medium bg-cWhite shadow-md shadow-CPurple sticky top-0 z-20 font-inter px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={itsoler} alt="" />
        </Link>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none text-1xl font-bold "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:ml-auto">
          <ul className="flex space-x-6">
            {menuItems.map((menu, index) => (
              <MenuItems items={menu} key={index} depthLevel={0} />
            ))}
          </ul>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="bg-gray-800 w-full text-center py-4">
          {menuItems.map((menu, index) => (
            <MenuItems items={menu} key={index} depthLevel={0} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
