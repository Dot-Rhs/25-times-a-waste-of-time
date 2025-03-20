import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cartTile";

const Cart = () => {
  const [total, setTotal] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotal(() => cart.reduce((acc: number, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center">
      {cart?.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3 min-w-[525px]">
              {cart.map((item) => (
                <CartTile cartItem={item} />
              ))}
            </div>
          </div>
          <div className="min-w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <p className="font-bold text-xl text-red-800">
                Your Cart Summary
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Items</span>
                <span className="text-gray-800">: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Cost</span>
                <span className="text-gray-800">: {total}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <p className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty bruv/maam
          </p>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
