import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./DdashboardElements";
import { NavLogo } from "./DdashboardElements";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./DdashboardElements";
import { SidebarWrapper } from "./DdashboardElements";
import { SideBtnWrap } from "./DdashboardElements";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import Dsidebar from "../Ddashboard/Dsidebar";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PatientCard from "./PatientCard"; // import the PatientCard component
import { Spinner } from "react-bootstrap"; // import the Spinner component from react-bootstrap

const RecordsByDoc = ({ state, props }) => {
  //const location = useLocation();
  console.log(state, "docrec");
  const [patientRecords, setPatientRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const { state: records } = location;
      setPatientRecords(records);
      setIsLoading(false);
    }, [location.state]);
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {patientRecords.map((record, index) => (
              <PatientCard
                key={index}
                uploader={record.uploader}
                reason={record.reason}
                visitedDate={record.visitedDate}
                summary={record.summary}
              />
              //<PatientCard record={patientRecords} />
            ))}
          </div>
          </>
        )}
      </div>
    );
  };

  /*useEffect(() => {
    let rr = location.state.flat(1);
    let records = {
      uploader: location.state[0],
      reason: location.state[1],
      visitedDate: location.state[2],
      summary: location.state[3],
    };
    // const { records } = ;
    setPatientRecords(rr);
    setIsLoading(false);
  }, [location]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <>
            <div style={{ color: "red" }}></div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {Array.isArray(patientRecords) && patientRecords.length > 0 && (
                <PatientCard
                  // key={index}
                  uploader={patientRecords[0]}
                  reason={patientRecords[1]}
                  visitedDate={patientRecords[2]}
                  summary={patientRecords[3]}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};*/

export default RecordsByDoc;
