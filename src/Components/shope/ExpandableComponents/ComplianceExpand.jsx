import React, { useState } from "react";
import Compliance from "../Compliance";
const ComplianceExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
        <div>
          {" "}
          <Compliance/>
        </div>
    </div>
  );
};

export default ComplianceExpand;
