import { useFetch } from ".";
import { IResponse } from "../../interfaces/IProducts";

export const FetchHookTest = () => {
  const { data, errorMsg, pending } = useFetch<IResponse>(
    `https://dummyjson.com/products`
  );

  if (pending) return <div>Loading!!!!!</div>;

  if (errorMsg) return <div>:O AN ERROR: {errorMsg}</div>;

  return (
    <div>
      <h1>useFetch Hook Test</h1>
      {pending ? <h3>Loading! Please wait bruv</h3> : null}
      {data?.products?.length
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
};
