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
} from "./ResdashboardElement";
import { NavLogo } from "./ResdashboardElement";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./ResdashboardElement";
import { SidebarWrapper } from "./ResdashboardElement";
import { SideBtnWrap } from "./ResdashboardElement";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import Ressidebar from "./Ressidebar";


import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


import PatientCard from './PatientCard'; // import the PatientCard component
import { Spinner } from 'react-bootstrap'; // import the Spinner component from react-bootstrap

const RecordsByRes = ({ state, props }) => {
  //const location = useLocation();
  console.log(state, "resrec");
  const [patientRecords, setPatientRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const records = location.state;
    console.log('records:', records);

    const unames = records[0];
      const reasons = records[1];
      const visitedDates = records[2];
      const summaries = records[3];

      const recordsArray = [];
      for (let i = 0; i < unames.length; i++) {
        recordsArray.push({
          uploader: unames[i],
          reason: reasons[i],
          visitedDate: visitedDates[i],
          summary: summaries[i],
        });
      }

      setPatientRecords(recordsArray);
      //setPatientRecords(records);
      console.log(patientRecords);
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
      ) : patientRecords.length === 0 ? (
        <p style={{ fontSize: "2rem", textAlign: "center" }}>
          No records found.
        </p>
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

  
  export default RecordsByRes;