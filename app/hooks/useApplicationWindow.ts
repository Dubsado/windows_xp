// hooks/useApplicationWindow.ts
export const useApplicationWindow = () => {
  const close = () => {
    console.log("Close window");
  };

  const maximize = () => {
    console.log("Maximize window");
  };

  const minimize = () => {
    console.log("Minimize window");
  };

  return { close, maximize, minimize };
};
