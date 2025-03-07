import React from "react";

const CertificateSection = () => {
  return (
    <div className="bg-cDarkBlue text-cWhite py-12 px-6 font-inter">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Earn A Verified Certificate Of Completion:
          </h2>
          <p className="text-base lg:text-lg mb-6">
            Earn a Machine Learning certificate, verifying your skills, step
            into the market with a proven and trusted skillset.
          </p>
          <button className="bg-CPurple text-indigo-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400">
            Earn a Certificate
          </button>
        </div>

        {/* Certificate Image */}
        <div className=" flex justify-center items-center ">
          <img
            src="/images/enroll/certificat.svg" // Replace with the actual certificate image link
            alt="Certificate"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
