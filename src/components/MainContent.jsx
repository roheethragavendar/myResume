import React from "react";

const MainContent = ({ activeStep, onNextStep, onPreviousStep }) => {
  return (
    <main className="w-full bg-gray-100 h-screen">
      <div className="mx-[5%] sm:mx-[15%] p-6 sm:p-12">
        <div className="flex flex-col gap-[30px]">
          <div className="w-full sm:w-[750px] flex">
            <div>
                
            </div>
            <h1 className="text-[#002D6B] text-2xl sm:text-4xl font-semibold font-merriweather">
              Personal Details
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-[20px] sm:gap-[40px] gap-y-6">
              <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[400px]">
                <label htmlFor="firstName1" className="mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName1"
                  id="firstName1"
                  className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                />
              </div>

              <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[400px]">
                <label htmlFor="firstName2" className="mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="firstName2"
                  id="firstName2"
                  className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                />
              </div>

              <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[400px]">
                <label htmlFor="firstName3" className="mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="firstName3"
                  id="firstName3"
                  className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                />
              </div>

              <div className="flex gap-[20px] sm:gap-[30px] w-full sm:w-auto">
                <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[185px]">
                  <label htmlFor="country" className="mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                  />
                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[185px]">
                  <label htmlFor="pinCode" className="mb-2">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    id="pinCode"
                    className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                  />
                </div>
              </div>

              <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[400px]">
                <label htmlFor="phone" className="mb-2">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                />
              </div>

              <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[400px]">
                <label htmlFor="email" className="mb-2">
                  Email *
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                />
              </div>

              <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[400px]">
                <label htmlFor="linkedin" className="mb-2">
                  LinkedIn
                </label>
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                />
              </div>

              <div className="flex flex-col text-[#002D6B] font-semibold text-[14px] sm:text-[16px] uppercase w-full sm:w-[400px]">
                <label htmlFor="website" className="mb-2">
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  className="w-full border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] sm:gap-[40px] justify-between sm:justify-end mt-[30px] flex-wrap">
            <button
              onClick={onPreviousStep}
              disabled={activeStep === 0}
              className="font-bold text-md border-2 py-3 px-8 border-[#002D6B] text-[#002D6B] rounded-full hover:bg-[#002D6B] hover:text-white"
            >
              Previous
            </button>
            <button
              onClick={onNextStep}
              disabled={activeStep === 5}
              className="bg-[#026A73] font-bold text-md py-3 px-8 rounded-full text-white"
            >
              Next: Work history
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
