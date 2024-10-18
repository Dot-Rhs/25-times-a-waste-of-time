import { useState } from "react";
import QRCode from "react-qr-code";

export const QRCodeGenerator = () => {
  const [input, setInput] = useState<string>("");
  const [qrCode, setQrCode] = useState<string>("");

  const handleGenerate = () => {
    setQrCode(input);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-name"
          placeholder="Enter your whatever"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={!input.trim()} onClick={handleGenerate}>
          Generate
        </button>
      </div>
      <div>
        <QRCode id="generator" value={qrCode} size={400} bgColor="#f00" />
      </div>
    </div>
  );
};
