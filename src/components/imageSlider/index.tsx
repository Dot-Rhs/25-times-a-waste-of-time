import { useEffect, useState } from "react";

interface IProps {
  url: string;
  limit: number | string;
  page: number | string;
}

export const ImageSlider = ({ url, limit, page }: IProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [slide, setSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImages = async (url: string) => {
    try {
      setLoading(() => true);
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) setImages(() => data);
    } catch (error) {
      setLoading(() => false);
      setErrorMsg(() => error?.message);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) return <div>Loading!!!!!</div>;

  if (errorMsg) return <div>Some kind of error occurred: {errorMsg}</div>;

  return <div className="container"></div>;
};
