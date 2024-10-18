import { useState } from "react";

export const CustomTabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (idx: number) => {
    setCurrentTabIndex(() => idx);
    onChange(idx);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((item, idx) => (
          <div
            className={`tab-item ${currentTabIndex === idx ? "active" : ""}`}
            key={item.label}
            onClick={() => handleClick(idx)}
          >
            <span className={"label"}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content">{tabsContent[currentTabIndex]?.content}</div>
    </div>
  );
};
