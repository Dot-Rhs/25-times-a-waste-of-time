import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'

interface IProps {
  url: string;
  limit: number | string;
  page: number | string;
}

interface IImage {
  "id": number | string,
  "author": string,
  "width": number,
  "height": number,
  "url": string,
  "download_url": string
}

export const ImageSlider = ({ url, limit, page }: IProps) => {
  const [images, setImages] = useState<IImage[]>([]);
  const [slide, setSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImages = async (url: string) => {
    try {
      setLoading(() => true);
      // throw Error()
      const res = await fetch(`${ url }?page=${ page }&limit=${ limit }`);
      const data = await res.json();

      if (data) setImages(() => data);
    } catch (error: unknown) {
      if (error instanceof Error) setErrorMsg(() => error?.message);
    }

    setLoading(() => false);
  };

  const handlePrevious = () => {
    setSlide(() => slide === 0 ? images.length - 1 : slide - 1)
  }

  const handleNext = () => {
    setSlide(() => slide === images.length - 1 ? 0 : slide + 1)
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) return <div>Loading!!!!!</div>;

  if (errorMsg) return <div>Some kind of error occurred: {errorMsg}</div>;

  return <div className="container">
    <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevious} />
    {images && images.length ?
      images.map((item, i) => (
        <img key={item.id} alt={item.download_url}
          src={item.download_url}
          className={slide === i ? 'current-image' : 'current-image hide-current-image'}
        />
      )) : null
    }
    <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNext} />
    <span className="circle-indicators">
      {images && images.length ?
        images.map((_, i) => (
          <button key={'image' + i}
            className={slide === i ? 'current-indicator' : 'current-indicator inactive-indicator'} onClick={() => setSlide(() => i)}></button>
        ))
        : null}
    </span>
  </div>;
};
