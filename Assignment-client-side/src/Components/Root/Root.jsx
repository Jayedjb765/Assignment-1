import React from "react";
import LeftNav from "../LeftNav/LeftNav";
import { Outlet } from "react-router-dom";
import Right from "../Right/Right";

const Root = () => {
  return (
    <div>
      <div className="flex ">
        
        <LeftNav ></LeftNav>
        <Right></Right>
      </div>
    </div>
  );
};

export default Root;
