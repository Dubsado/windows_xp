// components/ApplicationWindow.tsx
import React from "react";
import { useApplicationWindow } from "../hooks/useApplicationWindow";

const ApplicationWindow: React.FC = () => {
  const { close, maximize, minimize } = useApplicationWindow();

  return (
    <div className="application-window">
      <button onClick={close}>Close</button>
      <button onClick={maximize}>Maximize</button>
      <button onClick={minimize}>Minimize</button>
      {/* Add subMenuSystem here */}
    </div>
  );
};

export default ApplicationWindow;
