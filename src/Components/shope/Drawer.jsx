import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Drawer.css";
import Sleft from "./ShopLeft";
import { useContext } from "react";

import { UserContext } from "../../UserContext";

function Drawer() {

  const { isdraweropen, setisdraweropen } = useContext(UserContext);
  return (
    <>
      <div className="drawerlayout">
        <div
          className="timeicon"
          onClick={() => setisdraweropen(!isdraweropen)}
        >
          <FaTimes />
        </div >
        <div style={{"margin-left":"100px"}}>
        <Sleft  />
        </div>
      </div>
    </>
  );
}

export default Drawer;
