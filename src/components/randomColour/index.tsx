import { useEffect, useState } from "react";

export const RandomColour = () => {
  const [colourType, setColourType] = useState<string>("hex");
  const [colour, setColour] = useState<string>("#000000");

  const randomColourUtil = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateHex = () => {
    // 0xffffff << 0 is a bitwise operation that converts the number to an integer. e.g. 0xffffff << 0 = 16777215
    const hex =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

    setColour(() => hex);
  };

  const handleCreateRGB = () => {
    const r = randomColourUtil(256);
    const g = randomColourUtil(256);
    const b = randomColourUtil(256);

    setColour(() => `rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (colourType === "hex") {
      handleCreateHex();
    }
    if (colourType === "rgb") {
      handleCreateRGB();
    }
  }, [colourType]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: colour
      }}
    >
      <button
        onClick={() =>
          colourType !== "hex" ? setColourType(() => "hex") : handleCreateHex()
        }
      >
        Generate Hex Colour
      </button>
      <button
        onClick={() =>
          colourType !== "rgb" ? setColourType(() => "rgb") : handleCreateRGB()
        }
      >
        Generate RGB Colour
      </button>
      <button
        onClick={colourType === "hex" ? handleCreateHex : handleCreateRGB}
      >
        Generate Random Colour
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontSize: "60px",
          marginTop: 50
        }}
      >
        <h3>{colourType === "rgb" ? "RGB Colour" : "HEX Colour"}</h3>
        <h1>{colour}</h1>
      </div>
    </div>
  );
};
