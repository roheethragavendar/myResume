import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/4 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
