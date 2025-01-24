import { useRef } from "react";
import { IResponse } from "../../interfaces/IProducts";
import { useFetch } from "../useFetch";

export const ScrollToTopBottom = () => {
  const { data, errorMsg, pending } = useFetch<IResponse>(
    `https://dummyjson.com/products?limit=100`
  );
  const bottomRef = useRef<null | HTMLDivElement>(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToBottom = () => {
    if (bottomRef.current !== null) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (pending) return <h1> Loading...</h1>;

  if (errorMsg) return <h1>Error occurred</h1>;

  return (
    <div>
      <h1>Scroll To Top and Bottom Component</h1>
      <h3>Top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>

      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>

      <h3>This is the bottom of the page</h3>
      <div ref={bottomRef}></div>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
    </div>
  );
};
