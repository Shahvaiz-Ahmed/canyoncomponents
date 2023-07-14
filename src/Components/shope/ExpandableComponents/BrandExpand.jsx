import React, { useState } from "react";
import Brand from "../Brand";
const BrandExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
        <div>
          {" "}
          <Brand/>
        </div>
    </div>
  );
};

export default BrandExpand;
