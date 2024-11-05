import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Accordion } from "./components/accordion";
import { RandomColour } from "./components/randomColour";
import { StartRating } from "./components/starRating";
import { ImageSlider } from "./components/imageSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColour /> */}
      {/* <StartRating stars={10} /> */}
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={1} />
    </div>
  );
}

export default App;
