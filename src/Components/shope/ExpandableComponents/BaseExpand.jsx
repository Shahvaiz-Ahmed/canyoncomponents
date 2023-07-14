import React, { useState } from "react";
import SliderComponent from "../SliderComponent";
import CheckboxList from "../CheckboxeList";
const BaseExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      
      
        <div>
          {" "}
          <CheckboxList/>
        </div>
      
    </div>
  );
};

export default BaseExpand;
