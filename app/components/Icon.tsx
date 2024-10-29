// components/Icon.tsx
import React from "react";

type IconProps = {
  type: "folder" | "explorer";
};

const Icon: React.FC<IconProps> = ({ type }) => {
  return (
    <div className="icon">
      {/* Render icon based on type */}
      {type === "folder" ? "📁" : "🌐"}
    </div>
  );
};

export default Icon;
