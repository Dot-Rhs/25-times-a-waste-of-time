import { createContext, useState } from "react";

export const GlobalContext = createContext<null | {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
}>(null);
const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("gary");

  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
