import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkHistory = ({ activeStep, onNextStep, onPreviousStep }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (validateForm()) {
      navigate("/education");
      onNextStep();
    }
  };

  const handleBackClick = () => {
    navigate("/");
    console.log("BTN CLICKED", navigate);
    onNextStep();
  };

  const [formData, setFormData] = useState({
    jobTitle: "",
    employer: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }
    if (!formData.employer.trim()) {
      newErrors.employer = "Employer is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <main className="w-full bg-gray-100 min-h-screen">
      <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-[350px] p-4 sm:p-6 md:p-12">
        <div className="flex flex-col gap-6">
          <div className="w-full sm:max-w-[900px]">
            <h1 className="text-[#002D6B] text-xl sm:text-2xl md:text-4xl font-semibold font-merriweather">
              WorkHistory
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
              <div className="flex flex-wrap gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="jobTitle" className="mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className={`w-full border h-10 px-3 rounded focus:outline-none ${errors.jobTitle ? "border-red-500" : "border-[#002D6B]"}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
                  {/* className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2" */}
            
                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="employer" className="mb-2">
                    Employer *
                  </label>
                  <input
                    type="text"
                    name="employer"
                    id="employer"
                    // className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                    value={formData.employer}
                    onChange={handleInputChange}
                    className={`w-full border h-10 px-3 rounded focus:outline-none ${errors.employer ? "border-red-500" : "border-[#002D6B]"}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.employer}</p>}


                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="location" className="mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[30px] border-2 border-[#002D6B] h-10 px-3 focus:outline-none focus:border-2"
              />
              <label className="text-[#002D6B] text-sm sm:text-base w-full sm:max-w-[300px]">
                Remote
              </label>
            </div>
            <div className="flex gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
              <div className="flex flex-col w-full">
                <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px] mb-2">
                  Start Date
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[190px]">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                    />
                  </div>

                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[190px]">
                    <input
                      type="text"
                      name="pinCode"
                      id="pinCode"
                      className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px] mb-2">
                  End Date
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[190px]">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                    />
                  </div>

                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[190px]">
                    <input
                      type="text"
                      name="pinCode"
                      id="pinCode"
                      className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
            <button
              onClick={onPreviousStep}
              disabled={activeStep === 0}
              className="font-bold text-sm sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
            >
              Previous
            </button>
            <button
              onClick={handleNextClick}
              disabled={activeStep === 5}
              className="bg-[#026A73] font-bold text-sm sm:text-md py-2 px-6 sm:py-3 sm:px-8-full rounded-full text-white hover:opacity-90 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkHistory;
