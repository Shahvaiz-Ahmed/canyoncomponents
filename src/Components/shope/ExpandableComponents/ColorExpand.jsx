import React, { useState } from "react";
import Color from '../Color.jsx'
const ColorExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
        <div>
          {" "}
          <Color/>
        </div>
    </div>
  );
};

export default ColorExpand;
