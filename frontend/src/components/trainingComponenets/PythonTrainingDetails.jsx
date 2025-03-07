const PythonTrainingDetails = () => {
  return (
    <div className="bg-[#003E49] py-10 px-4 md:px-8 lg:px-16 text-cWhite font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What You Will Learn */}
        <div>
          <h3 className="text-xl font-bold mb-4">What you will learn</h3>
          <ul className="list-disc pl-5 space-y-3 text-justify">
            <li>
              Understand Python programming basics and how to automate
              repetitive tasks.
            </li>
            <li>
              Explore advanced Python features to enhance coding efficiency and
              innovation.
            </li>
            <li>
              Handle and analyze data with Python libraries and automate data
              processing.
            </li>
            <li>
              Build dynamic web applications and automate backend processes.
            </li>
            <li>
              Utilize Python for scripting and automation to improve
              productivity.
            </li>
            <li>
              Develop real-world projects, applying best practices and
              automation techniques.
            </li>
          </ul>
        </div>

        {/* Who Should Attend */}
        <div>
          <h3 className="text-xl font-bold mb-4">Who should attend?</h3>
          <ul className="list-disc pl-5 space-y-3 text-justify">
            <li>
              Beginners eager to start programming with Python and explore its
              automation potential.
            </li>
            <li>
              Developers looking to deepen their understanding of advanced
              Python concepts and improve efficiency.
            </li>
            <li>
              Data enthusiasts seeking to use Python for data analysis and
              automation.
            </li>
            <li>
              Web developers interested in using Python for building scalable
              applications and automating backend tasks.
            </li>
            <li>
              Professionals aiming to streamline processes and enhance
              productivity through Python scripting.
            </li>
            <li>
              Students and career changers looking to build practical skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PythonTrainingDetails;
