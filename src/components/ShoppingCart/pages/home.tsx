import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/productTile";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(() => true);

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (data) {
        setLoading(() => false);
        setProducts(() => data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center item-center">
          <Circles
            height={120}
            width={120}
            color="rgb(127, 29, 29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto padding-3">
          {products?.length
            ? products.map((product, idx) => (
                <ProductTile key={"product" + idx} product={product} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
