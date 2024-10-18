import { useEffect, useState } from "react";
import { IProduct, IResponse } from "../../interfaces/IProducts";
import "./styles.css";

export const ScrollIndicator = ({ url }: { url: string }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    // Find how far user has scrolled
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    // document height
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage(() => (scrolled / height) * 100);
  };

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        setLoading(() => true);
        const res = await fetch(url);
        const data: IResponse = await res.json();

        if (data?.products?.length) setData(() => data.products);

        console.log("DATA: ", data);
      } catch (error: unknown) {
        console.log("ERRRR: ", error);
        if (error instanceof Error) setErrMsg(() => error?.message);
      }
      setLoading(() => false);
    };
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errMsg) return <div>Error: {errMsg}</div>;

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator </h1>
        <div className="scroll-progress">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="data-container">
          {data?.length
            ? data.map((item) => {
                return <p>{item.title} </p>;
              })
            : null}
        </div>
      )}
    </div>
  );
};
