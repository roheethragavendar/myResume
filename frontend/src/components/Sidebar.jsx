import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Sidebar = ({ activeStep }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const stepperList = [
    { label: "Heading", path: "/" },
    { label: "Work History", path: "/work-history" },
    { label: "Education", path: "/education" },
    { label: "Skills", path: "/skills" },
    { label: "Summary", path: "/summary" },
    { label: "Finalize", path: "/finalize" },
  ];

  return (
    <aside className="sm:w-[20%] bg-[#092347] text-white sm:p-6 h-auto sm:h-screen fixed top-0 left-0 sm:flex flex-col z-50">
      {/* Mobile Header */}
      <div className="flex justify-between items-center gap-10 bg-[#092347] px-4 py-3">
        <h2 className="text-lg font-semibold">
          Your<span className="text-[#FF3D3C]">CV</span>Info
        </h2>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu */}
      <ul
        className={`space-y-4 sm:block ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300 bg-[#092347] sm:bg-transparent p-4 sm:p-0`}
      >
        {stepperList.map((item, index) => (
          <li
            key={index}
            className="hover:text-[#FF3D3C] cursor-pointer transition-colors duration-300 flex items-center gap-2"
          >
            <div
              className={`border-2 rounded-full px-3 py-[6px] text-[12px] font-bold ${
                activeStep === index ? "bg-yellow-600" : ""
              }`}
            >
              {index + 1}
            </div>
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
