import React from "react";
import { useNavigate } from "react-router-dom";

const Education = ({ activeStep, onNextStep, onPreviousStep }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/education");
    console.log("BTN CLICKED", navigate);
    onNextStep();
  };

  const handleBackClick = () => {
    navigate("/");
    console.log("BTN CLICKED", navigate);
    onNextStep();
  };

  return (
    <main className="w-full bg-gray-100 min-h-screen flex flex-col justify-center -mt-[30px]">
        <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-24 p-4 sm:p-6 md:p-12">
            <div className="flex flex-col gap-6">
                <div className="w-full sm:max-w-[900px]">
                    <h1 className="text-[#002D6B] text-xl sm:text-2xl md:text-4xl font-semibold font-merriweather">
                    Education
                    </h1>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                    <div className="flex flex-wrap gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
                        <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
                        <label htmlFor="firstName1" className="mb-2">
                        School Name *
                        </label>
                        <input
                            type="text"
                            name="firstName1"
                            id="firstName1"
                            className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                        </div>

                        <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
                        <label htmlFor="firstName2" className="mb-2">
                        School Location
                        </label>
                        <input
                            type="text"
                            name="firstName2"
                            id="firstName2"
                            className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                        </div>

                        <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
                        <label htmlFor="city" className="mb-2">
                        Degree
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
                    <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
                        <label htmlFor="city" className="mb-2">
                        Field of Study
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                        </div>

                    <div className="flex flex-col w-full">
                        <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px] mb-2">
                        Graduation Date (or expected Graduation Date)
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[240px]">
                            <input
                            type="text"
                            name="country"
                            id="country"
                            className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                            />
                        </div>

                        <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[240px]">
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
                        className="font-bold text-sm text-[#002D6B] sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
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

export default Education;
