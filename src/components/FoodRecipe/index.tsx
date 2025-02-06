import { BrowserRouter, Routes, Route } from "react-router";
import "./styles.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Details from "./pages/details";

const FoodRecipe = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default FoodRecipe;
