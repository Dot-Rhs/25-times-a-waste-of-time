import { useRef } from "react";

export const ScrollToSection = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const data = [
    {
      label: "FIRST",
      style: {
        width: "100%",
        height: "600px",
        background: "red"
      }
    },
    {
      label: "SECOND",
      style: {
        width: "100%",
        height: "600px",
        background: "pink"
      }
    },
    {
      label: "THIRD",
      style: {
        width: "100%",
        height: "600px",
        background: "blue"
      }
    },
    {
      label: "FOURTH",
      style: {
        width: "100%",
        height: "600px",
        background: "brown"
      }
    },
    {
      label: "FIFTH",
      style: {
        width: "100%",
        height: "600px",
        background: "orange"
      }
    }
  ];

  const handleScrollToSection = () => {
    const position = scrollRef?.current?.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <h1>Scroll to a section</h1>
      <button onClick={handleScrollToSection}>Click to scroll</button>

      {data.map((item, idx) => (
        <div ref={idx === 3 ? scrollRef : null} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
};
