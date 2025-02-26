import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddFavourite,
    favourites
  } = useContext(GlobalContext);

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );

        const data = await response.json();

        console.log("dATA: ", data);
        if (data?.data) {
          setRecipeDetailsData(() => data.data);
        }
      } catch (e) {
        console.error("data fetching error: ", e);
      }
    };

    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe.image_url}
            className="w-full h-full object-cover block group-hover:scale-110 duration-300"
            alt={recipeDetailsData?.recipe.title}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe.publisher}
        </span>

        <h3 className="text-2xl truncate text-black font-bold">
          {recipeDetailsData?.recipe.title}
        </h3>
        <div>
          <button
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
            onClick={() => handleAddFavourite(recipeDetailsData?.recipe)}
          >
            {favourites?.length > 0 &&
            favourites.findIndex(
              (el) => el.id === recipeDetailsData.recipe.id
            ) !== -1
              ? "Remove from favourites"
              : "Add to favourites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe.ingredients.map((ingredient, index) => (
              <li key={ingredient + index}>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
