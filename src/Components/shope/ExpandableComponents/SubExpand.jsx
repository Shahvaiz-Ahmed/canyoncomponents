import React, { useState } from "react";

import SubMaterial from "../SubMaterial";
const SubExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
     
        <div>
          {" "}
          <SubMaterial/>
        </div>
    </div>
  );
};

export default SubExpand;
