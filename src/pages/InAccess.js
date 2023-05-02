import React, { useState } from "react";
import InDashboard from "../components/InDashboard/InDashboard";
import Inaccess from "../components/InDashboard/Inaccess";

const InAccess = ({state}) => {
  return (
    <>
      <InDashboard />
      <Inaccess state={state}/>
    </>
  );
};

export default InAccess;
