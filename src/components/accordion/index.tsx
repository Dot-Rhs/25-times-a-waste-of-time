import { useState } from "react";
import dummyData from "./data";
import "./styles.css";

export const Accordion = () => {
  const [selected, setSelection] = useState<number | null>(null);
  const [enableMulti, setEnableMulti] = useState<boolean>(false);
  const [multiple, setMultiple] = useState<number[]>([]);

  const handleSingle = (currentId: number) => {
    setSelection(() => (selected === currentId ? null : currentId));
  };

  const handleMultiSelection = (id: number) => {
    return multiple.includes(id)
      ? setMultiple(() => multiple.filter((item) => item !== id))
      : setMultiple(() => [...multiple, id]);
  };

  const handleClick = (id: number) => {
    return enableMulti ? handleMultiSelection(id) : handleSingle(id);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMulti((prev) => !prev)}>
        Enable Multiple Panels
      </button>
      <div className="accordion">
        {dummyData && dummyData.length > 0 ? (
          dummyData.map((dataItem) => {
            return (
              <div className="item" key={"item" + dataItem.id}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleClick(dataItem.id)}
                  onKeyDown={() => handleClick(dataItem.id)}
                  className="title"
                  aria-label="what"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMulti
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div>{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && <div>{dataItem.answer}</div>}
              </div>
            );
          })
        ) : (
          <>No data here bab</>
        )}
      </div>
    </div>
  );
};
