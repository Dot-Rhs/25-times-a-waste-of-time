import { createContext, useState } from "react";

export const GlobalContext = createContext<null | {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
}>(null);
const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipteList] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${ searchParam }`)

      const data = await response.json()

      console.log('dATA: ', data);
      if (data?.data?.recipes) {
        setRecipteList(() => data.data.recipes)
      }

    } catch (e) {
      console.error('data fetching error: ', e)
    }
  }

  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
