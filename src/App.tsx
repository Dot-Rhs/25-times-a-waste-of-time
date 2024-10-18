import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Accordion } from "./components/accordion";
import { RandomColour } from "./components/randomColour";
import { StartRating } from "./components/starRating";
import { ImageSlider } from "./components/imageSlider";
import { LoadMore } from "./components/LoadMore";
import { TreeView } from "./components/TreeView";
import menus from "./components/TreeView/mockData";
import { QRCodeGenerator } from "./components/QRCode";
import { LightDark } from "./components/LightDark";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { TabsParent } from "./components/CustomTab/tabs-parent-test";
import { ModalParentTest } from "./components/modal/modal-parent-test";
import { GitHubProfile } from "./components/GitHubProfile";
import { SearchAutoComplete } from "./components/SearchAutocomplete";
import { NoughtsCross } from "./components/NoughtsCrosses";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColour /> */}
      {/* <StartRating stars={10} /> */}
      {/* <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={1} /> */}
      {/* <LoadMore /> */}
      {/* <TreeView menu={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDark /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabsParent /> */}
      {/* <ModalParentTest /> */}
      {/* <GitHubProfile /> */}
      {/* <SearchAutoComplete /> */}
      <NoughtsCross />
    </div>
  );
}

export default App;
