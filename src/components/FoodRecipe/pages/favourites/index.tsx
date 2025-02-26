import { useContext } from "react";
import { GlobalContext } from "../../context";
import { RecipeItem } from "../../components/RecipeItem";

const Favourites = () => {
  const { favourites } = useContext(GlobalContext);

  console.log("harold: ", favourites);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favourites && favourites.length > 0 ? (
        favourites.map((recipe) => {
          return <RecipeItem recipe={recipe} key={"favourite-" + recipe.id} />;
        })
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show here...
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
