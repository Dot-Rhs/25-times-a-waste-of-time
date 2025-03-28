import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div key={product.id}>
      <div className="group flex flex-col item-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.tile}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h3 className="text-lg truncate mt-3 text-gray-700 font-bold">
            {product?.title}
          </h3>
        </div>
        <div className="flex item-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
