import React from "react";

import styled, { css } from "styled-components";
import {
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "../Pdashboard/PdashboardElements";
const Psidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Patdetail">Patient's Details</SidebarLink>
          <br></br>
          <SidebarLink to="/RecordsForPat">Access Record</SidebarLink>
          <br></br>
          <SidebarLink to="/Grant">Grant access</SidebarLink>
          <br></br>
          <SidebarLink to="/Revoke">Revoke Access</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </>
  );
};

export default Psidebar;
