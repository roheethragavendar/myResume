import React from "react";

const Sidebar = ({ activeStep }) => {
  const stepperList = [
    "Heading",
    "Work History",
    "Education",
    "Skills",
    "Summary",
    "Finalize",
  ];

  return (
    <aside className="w-[20%] bg-[#092347] text-white p-6 h-screen">
      <h2 className="text-xl font-semibold mb-6 mx-auto text-center">
      Your<span className="text-[#FF3D3C]">CV</span>Info
      </h2>
      <ul className="space-y-4">
        {stepperList.map((item, index) => (
          <li
            key={index}
            className="hover:text-[#FF3D3C] cursor-pointer transition-colors duration-300 flex items-center gap-2 "
          >
            <div
                className={`border-2 rounded-full px-2 py-1 text-[12px] font-bold ${
                activeStep === index ? "bg-yellow-600" : ""
            }`}
            >
            {index + 1}
            </div>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
