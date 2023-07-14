import React, { useState } from "react";
import DurometerRange_Compliance from "../DurometerRange_Compliance";

const HardnessExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      
        <div>
          {" "}
          <DurometerRange_Compliance/>
        </div>
      
    </div>
  );
};

export default HardnessExpand;
