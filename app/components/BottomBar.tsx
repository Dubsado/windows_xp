// components/BottomBar.tsx
import React from "react";
import RightMenu from "./RightMenu";
import StartMenu from "./StartMenu";
import Widgets from "./Widgets";

const BottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-between items-center bg-gray-800 p-2">
      <StartMenu />
      <Widgets />
      <RightMenu />
    </div>
  );
};

export default BottomBar;
