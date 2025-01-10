import React from "react";

const MainContent = () => {
  return (
    <main className="w-full bg-gray-100">
      <div className="mx-[15%] px-12 py-9">
        <div className="flex flex-col gap-[30px]">
            <div className="w-[750px] flex flex-col gap-2 ">
                <h1 className="text-[#002D6B] text-4xl font-semibold font-merriweather">
                What’s the best way for employers to contact you?
                </h1>
                <p className="text-[#002D6B] text-xl">
                We suggest including an email and phone number.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-[#002D6B] text-[14px] font-semibold">
                * indicates a required field
                </p>
                <div className="flex flex-wrap gap-[40px] gap-y-6">
                    <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                        <label htmlFor="firstName1" className="mb-2">
                        First Name *
                        </label>
                        <input
                        type="text"
                        name="firstName1"
                        id="firstName1"
                        className="w-[400px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                    </div>

                    <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                        <label htmlFor="firstName2" className="mb-2">
                        Last Name *
                        </label>
                        <input
                        type="text"
                        name="firstName2"
                        id="firstName2"
                        className="w-[400px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                    </div>

                    <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                        <label htmlFor="firstName3" className="mb-2">
                        City
                        </label>
                        <input
                        type="text"
                        name="firstName3"
                        id="firstName3"
                        className="w-[400px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                    </div>
                    <div className="flex gap-[30px]">
                        <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                            <label htmlFor="firstName3" className="mb-2">
                            Country
                            </label>
                            <input
                                type="text"
                                name="firstName3"
                                id="firstName3"
                                className="w-[185px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                            />
                        </div>
                        <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                            <label htmlFor="firstName3" className="mb-2">
                            Pin Code
                            </label>
                            <input
                                type="text"
                                name="firstName3"
                                id="firstName3"
                                className="w-[185px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                        <label htmlFor="firstName3" className="mb-2">
                        Phone *
                        </label>
                        <input
                        type="text"
                        name="firstName3"
                        id="firstName3"
                        className="w-[400px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                    </div>
                    <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                        <label htmlFor="firstName3" className="mb-2">
                        Email *
                        </label>
                        <input
                        type="text"
                        name="firstName3"
                        id="firstName3"
                        className="w-[400px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                    </div>
                    <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                        <label htmlFor="firstName3" className="mb-2">
                        LinkedIn
                        </label>
                        <input
                        type="text"
                        name="firstName3"
                        id="firstName3"
                        className="w-[400px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                    </div>
                    <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                        <label htmlFor="firstName3" className="mb-2">
                        Website
                        </label>
                        <input
                        type="text"
                        name="firstName3"
                        id="firstName3"
                        className="w-[400px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                    </div>
                    <div className="flex flex-col text-[#002D6B] font-semibold text-[16px] uppercase">
                        <label htmlFor="firstName3" className="mb-2">
                        Website
                        </label>
                        <input
                        type="text"
                        name="firstName3"
                        id="firstName3"
                        className="w-[400px] border-[1px] border-[#002D6B] h-10 p-2 focus:outline-none focus:border-[#026A73] focus:border-2"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-[40px] justify-end">
                <button className="font-bold text-md border-2 py-3 px-8 border-[#002D6B] text-[#002D6B] rounded-full hover:bg-[#002D6B] hover:text-white">Preview</button>
                <button className="bg-[#026A73] font-bold text-md py-3 px-8 rounded-full text-white">Next: Work history</button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
