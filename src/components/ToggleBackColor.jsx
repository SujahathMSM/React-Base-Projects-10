import React, { useState } from "react";
import "../BackColor.css";
const ToggleBackColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <button style={{ color: textColor }}>Change color</button>
    </div>
  );
};

export default ToggleBackColor;
