import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
      <Link to={"/"}>
        <div className="ml-5">
          <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            REDUX SHOPPING CART
          </h1>
        </div>
      </Link>
      <div className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
        {/* <ul className="flex gap-5 list-inside mr-5"> */}
        <Link to={"/"}>
          <li className=" list">Home</li>
        </Link>
        <Link to={"/cart"}>
          <li className="cursor-pointer">Cart</li>
        </Link>
        {/* </ul> */}
      </div>
    </nav>
  );
};

export default Header;
