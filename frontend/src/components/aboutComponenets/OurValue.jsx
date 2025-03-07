import React from "react";

const OurValue = () => {
  return (
    <div className="bg-white py-10 px-6 font-inter">
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-cDarkBlue mb-8 text-left max-w-4xl mx-auto">
        OUR VALUE:
      </h2>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-cDarkBlue">
              Innovation:
            </h3>
            <p className="text-gray-700">
              We value innovation and originality! We are always looking for
              innovative ways to apply and implement state-of-the-art
              technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cDarkBlue">Integrity:</h3>
            <p className="text-gray-700">
              We encourage the operation of high ethical standards at all times
              in order to maintain the spirit of honesty in our relationship
              with other people and organizations that we are related with.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cDarkBlue">
              Collaboration:
            </h3>
            <p className="text-gray-700">
              We subscribe to combined efforts and cooperation in any project,
              which is vice done in collaboration with the clients.
            </p>
          </div>
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-cDarkBlue">
              Excellence:
            </h3>
            <p className="text-gray-700">
              We aim at being the best performers in all of our projects with a
              heightened focus on quality and performance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cDarkBlue">
              Empowerment:
            </h3>
            <p className="text-gray-700">
              Once our clients and our team are effectively equipped, trained,
              strengthened, and supported, we guarantee success all over!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cDarkBlue">
              Customer-Centricity:
            </h3>
            <p className="text-gray-700">
              Our clients remain our focus and we seek to deliver customized
              solutions to fit the needs and expectations of our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
