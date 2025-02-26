import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext<null | {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  favourites: string;
  setFavourites: React.Dispatch<React.SetStateAction<[]>>;
}>(null);
const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipteList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favourites, setFavourites] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipteList(() => data.data.recipes);
        setLoading(() => false);
        setSearchParam(() => "");
        navigate("/");
      }
    } catch (e) {
      console.error("data fetching error: ", e);
      setLoading(() => false);
      setSearchParam(() => "");
    }
  };

  const handleAddFavourite = (item) => {
    let newList = [...favourites];

    const idx = newList.findIndex((el) => el.id === item.id);

    if (idx === -1) {
      newList.push(item);
    } else {
      newList = newList.filter((el) => el.id !== item.id);
    }

    setFavourites((prev) => newList);
  };

  console.log('johnoson" ', searchParam);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        favourites,
        setFavourites,
        handleAddFavourite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
