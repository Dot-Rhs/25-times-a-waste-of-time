import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export const StartRating = ({ stars = 5 }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleclick = (index: number) => {
    setRating(() => index);
  };

  const handleMouseEnter = (index: number) => {
    setHover(() => index);
  };

  const handleMouseLeave = () => {
    setHover(() => rating);
  };

  return (
    <div className="star-rating">
      {[...Array(stars)].map((_, i) => {
        i += 1;
        return (
          <FaStar
            key={i + "star"}
            className={i <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleclick(i)}
            onMouseMove={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};
