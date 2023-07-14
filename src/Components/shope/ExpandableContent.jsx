import React, { useState } from "react";
import dimensions from "../../Static/Dimensions.jpg";

const ExpandableContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button
        onClick={toggleExpand}
        style={{
          background: "white",
          fontSize: "50px",
          color: "#F5976B",
          border: "none",
          outline: "none",
          cursor: "pointer",
          padding: "2px 14px",
          borderRadius: "50%",
          paddingTop: '0.5rem'
        }}
      >
        {isExpanded ? "-" : "+"}
      </button>
      {isExpanded && (
        <div>
          {" "}
          <img
            src={dimensions}
            alt="StandardImage"
            width={250}
            style={{ marginLeft: "-13rem", marginTop: "3rem" }}
          />
        </div>
      )}
    </div>
  );
};

export default ExpandableContent;
