import { useEffect, useState } from "react";

export type IFetchResponse = {
  data: unknown;
  pending: boolean;
  errorMsg: string | null;
  fetchData: () => Promise<void>;
};

export const useFetch = <T,>(url: string, options = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchData = async (newUrl = url): Promise<void> => {
    setPending(() => true);
    try {
      // throw Error()
      const res = await fetch(newUrl, options);

      if (!res.ok) throw new Error(res.statusText);

      const data = await res.json();

      console.log("ress: ", data.products);
      if (data?.products) {
        setData((prev) => data);
      }
    } catch (error: unknown) {
      if (error instanceof Error) setErrorMsg(() => error?.message);
    }
    setPending(() => false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, errorMsg, pending, fetchData };
};

// How to type with generics
//   const { data, errorMsg, pending } = useFetch<IProduct[]>(
// `https://dummyjson.com/products?limit=20&skip=${
//     count === 0 ? 0 : count * 20
//   }`
// );
