import React, { useState } from "react";

const RightMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center space-x-2 px-2">
      {/* Network Icon */}
      <button className="p-2 hover:bg-gray-700 rounded-md">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      </button>

      {/* Sound Icon */}
      <button className="p-2 hover:bg-gray-700 rounded-md">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-4.5-8.5l4.5-4.5 4.5 4.5"
          />
        </svg>
      </button>

      {/* Time and Date */}
      <button
        className="p-2 hover:bg-gray-700 rounded-md text-white text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-right">
          <div>{new Date().toLocaleTimeString()}</div>
          <div>{new Date().toLocaleDateString()}</div>
        </div>
      </button>
    </div>
  );
};

export default RightMenu;
