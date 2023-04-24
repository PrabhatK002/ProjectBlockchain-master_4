import React from 'react';
//import { Container, Title, FormWrap } from './DdashboardElements';
import { Container } from './PdashboardElements';
import { FormWrap } from './PdashboardElements';
import { Icon } from './PdashboardElements';
import { FormContent } from './PdashboardElements';
import { Form } from './PdashboardElements';
import { FormH1 } from './PdashboardElements';
import { FormLabel } from './PdashboardElements';
import { FormInput } from './PdashboardElements';
import { FormButton } from './PdashboardElements';
import { Text } from './PdashboardElements';
import styled from 'styled-components';
//import { OuterBox } from './PdashboardElements';

import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'; 

const Pdetail = ({ state }) => {
  const [patientData, setPatientData] = useState({
    name: "",
    phone: "",
    gender: "",
    dob: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadPatientData = async () => {
    try {
      setLoading(true);
      const contract = { state };
      const result = await contract.methods.getPatientDetails().call();
      setPatientData({
        name: result[0],
        phone: result[1],
        gender: result[2],
        dob: result[3]
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Error fetching patient data. Please try again later.");
    }
  };

  useEffect(() => {
    loadPatientData();
  }, []);

  return (
    <>
      <Container>
        <FormWrap>          
          <FormContent>
            <Form >
              <FormH1>Look up into Patient's detail</FormH1>
              <FormLabel htmlFor='for'>Account address :</FormLabel>
              <FormInput type='text' id='address' value={state.account} disabled />
              <FormLabel htmlFor='to'>Name :</FormLabel>
              <FormInput type='text' id='name' value={patientData.name} disabled />
              <FormLabel htmlFor='to'>Phone Number :</FormLabel>
              <FormInput type='text' id='phone' value={patientData.phone} disabled />
              <FormLabel htmlFor='to'>Gender :</FormLabel>
              <FormInput type='text' id='gender' value={patientData.gender} disabled />
              <FormLabel htmlFor='to'>DOB :</FormLabel>
              <FormInput type='text' id='dob' value={patientData.dob} disabled />
              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Pdetail;