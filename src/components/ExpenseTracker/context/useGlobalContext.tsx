import { useContext } from "react";
import { GlobalContext } from ".";

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context) {
    return context;
  }

  throw Error("Invalid context");
};

export default useGlobalContext;
