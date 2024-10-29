// hooks/useStartMenu.ts
import { useState } from "react";

export const useStartMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, toggle };
};
