import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aibad from "../../assets/images/members/aibad.jpg";
import ali from "../../assets/images/members/ali.jpg";
import zuhiab from "../../assets/images/members/zuhiab.jpg";
import waqas from "../../assets/images/members/waqas.jpg";
import waqasi from "../../assets/images/members/Mwaqas.jpg";
import fawad from "../../assets/images/members/fawad.jpg";
import adnan from "../../assets/images/members/adnan.jpg";
import saif from "../../assets/images/members/saif.jpg";
import abubakkar from "../../assets/images/members/abubakkar.jpg";
import noor from "../../assets/images/members/noor.jpg";
import kainat from "../../assets/images/members/kainat.jpg";
import ahsan from "../../assets/images/members/ahsan.jpg";

import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
// import test from "../../assets/images/members/test1.jpg";

import masooma from "../../assets/images/members/masooma.jpg";
import hafeezurehman from "../../assets/images/members/hafeez.jpg";

const TeamSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    pauseOnHover: true, // Pauses autoplay when hovered
    ltr: true, // Enables right-to-left sliding
    arrows: false, // Hides navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Zohaib khan",
      role: "Data Scientist",
      description:
        "As a Data Scientist at ITSOLERA, He specialize in analyzing complex datasets and developing data-driven solutions. With expertise in machine learning, statistical modeling, and data visualization, he uncover insights and build predictive models to drive business growth and support strategic decision-making.",
      image: zuhiab,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Fawad Azam",
      role: "AI Enginerr",
      description:
        "As a AI Engineer at ITSOLERA, He assist in leveraging AI and deep learning to develop real-world solutions. With a foundation in software engineering and generative AI, he contribute to projects that enhance our technological capabilities.",
      image: fawad,
      linkedin: "/",
      facebook: "",
      instagram:
        "https://www.linkedin.com/in/fawad-azam-126705253?utm_source=share&utm_campaign=share_via&utm_content=pofile",
    },
    {
      name: "Muhammad Adnan ",
      role: "Full Stack Develpoer",
      description:
        "As a Full Stack Developer at ITSOLERA, He work on developing dynamic web applications using both front-end and back-end technologies. With a strong foundation in both client-side and server-side development, he contribute to building robust, scalable solutions that enhance our technological capabilities.",
      image: adnan,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Muhammad Ahsan Ayaz",
      role: "Cyber Security Engineer",
      description:
        "A cybersecurity engineer securing networks, assessing vulnerabilities, and ensuring system integrity at ITSOLERA.",
      image: ahsan,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Saifu Rahman ",
      role: "AI Engineer",
      description:
        "As a AI Engineer at ITSOLERA, He assist in leveraging AI and deep learning to develop real-world solutions. With a foundation in software engineering and generative AI, he contribute to projects that enhance our technological capabilities.",
      image: saif,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Noor uddin",
      role: "AI Engineer",
      description:
        "As a AI Engineer at ITSOLERA, He assist in leveraging AI and deep learning to develop real-world solutions. With a foundation in software engineering and generative AI, he contribute to projects that enhance our technological capabilities.",
      image: noor,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },

    {
      name: "Abu Bakkar",
      role: "Staff Supporter",
      description:
        "As a supporter at ITSOLERA, He assist in ensuring timely transportation and delivery of materials, products, and staff. With a focus on safety and efficiency, he contribute to the smooth operation of day-to-day logistics within the company.",
      image: abubakkar,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Ali Khan",
      role: "MERN Stack Developer",
      description:
        "As a MERN Stack Developer at ITSOLERA, He specialize in building dynamic, scalable web applications using MongoDB, Express.js, React.js, and Node.js. he focus on delivering seamless, user-friendly interfaces and robust back-end systems to drive business success.",
      image: ali,
      linkedin: "https://www.linkedin.com/in/engr-ali-khan-626667251/",
      facebook: "https://www.facebook.com/profile.php?id=100034895843168",
      instagram:
        "https://www.instagram.com/engineer_alikhan?utm_source=qr&igsh=MWV3amZ4cm80a3U4bQ==",
    },
    {
      name: "Kainat Afzal",
      role: "AI Enginerr",
      description:
        "She is AI Engineer at ITSOLERA, He assist in leveraging AI and deep learning to develop real-world solutions. With a foundation in Computer Science  and generative AI, she contribute to projects that enhance our technological capabilities.",
      image: kainat,
      linkedin: "/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Waqas Gul",
      role: "MERN Stack developer",
      description:
        "As a Senior MERN Stack Developer at ITSOLERA, He specialize in building dynamic, scalable web applications using MongoDB, Express.js, React.js, and Node.js. With a focus on creating seamless user interfaces and robust back-end systems, He lead end-to-end development and mentor team members to deliver impactful, high-performing solutions that drive business growth.",
      image: waqas,
      linkedin: "https://www.linkedin.com/in/waqas-gul-b7580826b/",
      facebook: "https://www.facebook.com/WAQASI.369",
      instagram: "https://www.instagram.com/w_a_q_a_s_i/",
    },
  ];

  const woners = [
    {
      name: "Dr. Hafeez UR Rehman ",
      role: "Founder & CEO",
      description:
        "Dr. Hafeez ur Rehman, with a PhD in Electrical Engineering, is the CEO of ITSOLERA PVT LTD and an expert in AI, IoT, and cybersecurity. With over 13 years of experience, he has developed advanced solutions that integrate AI, IoT, and cybersecurity to enhance threat detection, automate security systems, and protect digital infrastructures. His work includes applying machine learning and IoT technologies to strengthen Pakistan’s technological and security landscape. Dr. Hafeez is also a published researcher, contributing to both academic knowledge and practical applications in these .",
      image: hafeezurehman,
      linkedin: "https://www.linkedin.com/in/dr-hafeez-ur-rehman-633a43135/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Masooma Ali ",
      role: "Director Cyber Security",
      description:
        "Masooma Ali serves as the Director of ITSOLERA, leading the Cybersecurity Department. With a Bachelor's degree in Computer Science and a specialization in cybersecurity, her expertise includes internationally recognized certifications such as Certified Ethical Hacker (CEH), CEH Practical Master from EC-Council, and CompTIA Security+. Bringing over 5 years of experience in the cybersecurity industry, Masooma has played a pivotal role in leading projects and instructing multiple NAVTTC and TEVTA Punjab cybersecurity batches, contributing to the development of skilled cybersecurity professionals.",
      image: masooma,
      linkedin: "https://www.linkedin.com/in/masooma-ali-94243b240/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Muhammad Waqas",
      role: "Senior AI Engineer",
      description:
        "As an AI Engineer at ITSOLERA, He focus on leveraging AI and deep learning to create real-world solutions. With a background in software engineering and generative AI, he drive innovative projects that enhance our technological capabilities.",
      image: waqasi,
      linkedin: "https://www.linkedin.com/in/muhammad-waqas-3b7122257/",
      facebook: "/",
      instagram: "/",
    },
    {
      name: "Aibad Ullah",
      role: "Media & Marketing Manager",
      description:
        "As the Media and Marketing Manager at ITSOLERA, He bring over 7 years of expertise in digital strategy and photography to elevate our brand’s visual storytelling. he focus on creating compelling content and campaigns that effectively communicate our vision, engage our audience, and drive impactful results.",
      image: aibad,
      linkedin: "https://www.linkedin.com/in/aibadullah/",
      facebook: "https://www.facebook.com/Aibadvlogs/",
      instagram: "https://www.instagram.com/aibadvlogs/",
    },
  ];

  return (
    <div
      className="w-full px-4 py-16 lg:px-16 font-inter"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-center text-xl mb-3">MEET OUR TEAM</h4>
      <h2 className="text-center text-3xl font-bold mb-6">
        <span className="text-indigo-500">Spotlight On Our Experts</span>
      </h2>
      <p className="text-center text-textGray">
        Explore the expertise, passion, and innovative thinking of the
        professionals <br />
        who drive ITSOLERA’s success and cutting-edge solutions.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 px-8 py-12 bg-gray-50">
        {woners.map((member, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl  animate-fadeIn"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-center justify-center md:justify-start h-56 md:h-auto m-4 rounded-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-3/4 md:w-full h-full object-cover rounded transition-all duration-500"
              />
            </div>

            <div className="p-6 flex flex-col justify-center ">
              <h2 className="text-xl font-bold text-cDarkBlue">
                {member.name}
              </h2>
              <p className="text-sm font-bold text-cDarkBlue mb-4">
                {member.role}
              </p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>

            <div className="absolute inset-0 flex items-end bottom-4 left-56 justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 hover:opacity-100    ">
              <div className="flex space-x-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-CPurple"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-CPurple"
                  >
                    <FaFacebook />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-CPurple"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-4">
            <div
              className="p-4 mb-6 bg-cWhite shadow-xl rounded-lg text-center transform transition-transform duration-300 hover:scale-105 relative group"
              style={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-cDarkBlue">
                {member.name}
              </h3>
              <p className="text-indigo-600 text-sm font-medium">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm mt-2 text-textGray">
                {member.description}
              </p>

              {/* Social Icons Container */}
              <div className="absolute inset-0 flex items-center justify-center bg-cBlack bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
                <div className="flex space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cWhite text-3xl hover:text-[#0000FF] hover:bg-cWhite rounded"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cWhite text-3xl hover:text-[#0000FF] hover:bg-cWhite rounded"
                    >
                      <FaFacebook />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cWhite text-3xl hover:text-[#0000FF] hover:bg-cWhite rounded"
                    >
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
