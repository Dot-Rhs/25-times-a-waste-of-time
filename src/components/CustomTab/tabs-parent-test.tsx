import { CustomTabs } from ".";
import "./styles.css";

const RandomComponentThatSaysHi = () => {
  return <h1>hi</h1>;
};

export const TabsParent = () => {
  const tabs = [
    { label: "TAB 1", content: "This is placeholder for Tab 1" },
    { label: "TAB 2", content: "Some proper disgusting colours right?" },
    { label: "TAB 3", content: <RandomComponentThatSaysHi /> }
  ];

  const handleChange = (idx: number) => {
    console.log("Current IDX: ", idx);
  };

  return (
    <CustomTabs
      tabsContent={tabs}
      onChange={(idx: number) => handleChange(idx)}
    />
  );
};
