import React, { useState } from "react";
import StartMenuButton from "./StartMenuButton";

const StartMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "documents", label: "Documents" },
    { id: "pictures", label: "Pictures" },
    { id: "settings", label: "Settings" },
    { id: "power", label: "Power" },
  ];

  return (
    <div className="relative">
      {/* Start Button */}
      <StartMenuButton
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 21H4a1 1 0 01-1-1v-7a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1zm0-9H4a1 1 0 01-1-1V4a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1zm9 9h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1zm0-9h-7a1 1 0 01-1-1V4a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1z" />
        </svg>
        <span>Start</span>
      </StartMenuButton>

      {/* Start Menu Dropdown */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          {/* User Profile Section */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
              <span className="text-white">User Name</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            {menuItems.map((item) => (
              <StartMenuButton key={item.id} onClick={() => console.log(`Clicked ${item.label}`)}>
                {item.label}
              </StartMenuButton>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartMenu;
