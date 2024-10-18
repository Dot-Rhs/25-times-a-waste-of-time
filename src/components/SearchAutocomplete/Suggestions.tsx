import "./styles.css";

export const Suggestions = ({ data, handleClick }) => {
  return (
    <ul className="suggestions-container">
      {data?.length
        ? data.map((item, idx) => (
            <li
              style={{ listStyle: "none" }}
              key={item + idx}
              onClick={handleClick}
            >
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};
