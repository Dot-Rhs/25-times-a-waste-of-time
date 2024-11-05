import { useContext } from "react";
import { LightDark } from "../LightDark";
import { NoughtsCross } from "../NoughtsCrosses";
import { TreeView } from "../TreeView";
import menus from "../TreeView/mockData";
import { Accordion } from "../accordion";
import { FeatureFlagsContext } from "./context";

export const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  console.log("GREGG: ", loading, enabledFlags);

  const toRender = [
    { key: "showLightAndDark", component: <LightDark /> },
    { key: "showTicTacToe", component: <NoughtsCross /> },
    { key: "showTreeView", component: <TreeView menu={menus} /> },
    { key: "showAccordion", component: <Accordion /> }
  ];

  if (loading) return <h1>Loading!!!!!</h1>;

  const checkEnabledFlags = (currentKey: string) => {
    return enabledFlags[currentKey];
  };

  return (
    <div>
      <h1>Feature Flags</h1>
      {enabledFlags !== null
        ? toRender.map((component) =>
            checkEnabledFlags(component.key) ? component.component : null
          )
        : null}
    </div>
  );
};
