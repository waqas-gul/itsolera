import React from "react";

const OurApproach = () => {
  const steps = [
    {
      id: "01",
      title: "Government Approval:",
      description:
        "ITSOLERA receives official recognition from the Government of Pakistan's Securities and Exchange Commission of Pakistan (SECP), obtaining corporate approval with an identification number (Corporate Unique Identification No. 0257299).",
    },
    {
      id: "02",
      title: "Expansion & Diversification:",
      description:
        "ITSOLERA receives official recognition from the Government of Pakistan's Securities and Exchange Commission of Pakistan (SECP), obtaining corporate approval with an identification number (Corporate Unique Identification No. 0257299).",
    },
    {
      id: "03",
      title: "Recognition & Global Reach:",
      description:
        "ITSOLERA receives official recognition from the Government of Pakistan's Securities and Exchange Commission of Pakistan (SECP), obtaining corporate approval with an identification number (Corporate Unique Identification No. 0257299).",
    },
  ];

  return (
    <div className="bg-cWhite py-16 font-inter ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-cDarkBlue text-3xl font-bold mb-12">OUR APPROACH:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="text-center border border-gray-600 rounded-lg p-6 bg-cDarkBlue hover:shadow-lg transition duration-300"
            >
              {/* Number with cDarkBlue text color */}
              <div className="text-5xl font-extrabold mb-4 text-cWhite">{step.id}</div>
              {/* Subheading with cDarkBlue text color */}
              <h3 className="text-xl font-semibold mb-4 text-cWhite">{step.title}</h3>
              {/* Updated description color to text-cWhite */}
              <p className="text-sm leading-relaxed text-cWhite">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
