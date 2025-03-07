import React, { useEffect, useState } from "react";
import { FaGlobe, FaTasks, FaAward, FaUsers } from "react-icons/fa";

const AnimatedStats = () => {
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    team: 0,
  });

  const targetStats = {
    clients: 1485,
    projects: 3520,
    experience: 25,
    team: 75,
  };

  const animateNumbers = () => {
    const duration = 2000; // Total duration of the animation in milliseconds
    const frameRate = 30; // Updates per second
    const totalFrames = Math.round((duration / 1000) * frameRate);

    const incrementValues = Object.keys(targetStats).reduce(
      (increments, key) => {
        increments[key] = targetStats[key] / totalFrames;
        return increments;
      },
      {}
    );

    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      setStats((prevStats) => {
        const updatedStats = { ...prevStats };
        Object.keys(targetStats).forEach((key) => {
          updatedStats[key] = Math.min(
            prevStats[key] + incrementValues[key],
            targetStats[key]
          );
        });
        return updatedStats;
      });

      if (currentFrame >= totalFrames) {
        clearInterval(interval);
      }
    }, duration / totalFrames);
  };

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      const rect = statsSection.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        animateNumbers();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="stats-section"
      className="w-full bg-cDarkBlue py-12 font-inter text-white text-center"
    >
      <div className="max-w-6xl mx-auto text-cWhite grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Trusted Clients */}
        <div className="flex flex-col items-center">
          <FaGlobe size={40} className="mb-4 text-gray-300" />
          <h3 className="text-3xl md:text-[42px] font-bold">
            {Math.round(stats.clients)}+
          </h3>
          <p className="text-sm md:text-base">Trusted Clients</p>
        </div>

        {/* Projects Completed */}
        <div className="flex flex-col items-center">
          <FaTasks size={40} className="mb-4 text-gray-300" />
          <h3 className="text-3xl md:text-[42px] font-bold">
            {Math.round(stats.projects)}+
          </h3>
          <p className="text-sm md:text-base">Projects Completed</p>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col items-center">
          <FaAward size={40} className="mb-4 text-gray-300" />
          <h3 className="text-3xl md:text-[42px] font-bold">
            {Math.round(stats.experience)}+
          </h3>
          <p className="text-sm md:text-base">Years of Experience</p>
        </div>

        {/* Professional Team */}
        <div className="flex flex-col items-center">
          <FaUsers size={40} className="mb-4 text-gray-300" />
          <h3 className="text-3xl md:text-[42px] font-bold">
            {Math.round(stats.team)}+
          </h3>
          <p className="text-sm md:text-base">Professional Team</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;
