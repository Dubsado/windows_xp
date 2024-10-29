import React from "react";

interface StartMenuButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const StartMenuButton: React.FC<StartMenuButtonProps> = ({
  onClick,
  children,
  className = "",
  isActive = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left px-4 py-2 
        text-white hover:bg-gray-700 
        rounded-md transition-colors duration-200
        ${isActive ? "bg-gray-700" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default StartMenuButton;
