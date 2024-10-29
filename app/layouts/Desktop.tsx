// layouts/Desktop.tsx
import React from "react";
import BottomBar from "../components/BottomBar";

const Desktop: React.FC = () => {
  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{ backgroundImage: "url(https://wallpaperaccess.com/full/90278.jpg)" }}
    >
      {/* Add desktop icons and other components here */}
      <BottomBar />
    </div>
  );
};

export default Desktop;
