import React from 'react';
//import { Container, Title, FormWrap } from './DdashboardElements';
import { Container } from './DdashboardElements';
import { FormWrap } from './DdashboardElements';
import { Icon } from './DdashboardElements';
import { FormContent } from './DdashboardElements';
import { Form } from './DdashboardElements';
import { FormH1 } from './DdashboardElements';
import { FormLabel } from './DdashboardElements';
import { FormInput } from './DdashboardElements';
import { FormButton } from './DdashboardElements';
import { Text } from './DdashboardElements';
import styled from 'styled-components';
//import { OuterBox } from './DdashboardElements';

import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'; 

const Ddetail = ({ state }) => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    licenseno: "",
    hname: "",
    faculty: "",
    contact: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadDoctorData = async () => {
    try {
      setLoading(true);
      const { provider, signer, contract } = state;
      console.log(contract);
      const result = await contract.getDoctorDetails();
      setDoctorData({
        name: result[0],
        licenseno: result[1],
        hname: result[2],
        faculty: result[3],
        contact: result[4]
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Error fetching doctor data. Please try again later.");
    }
  };

  useEffect(() => {
    loadDoctorData();
  }, []);

  return (
    <>
      <Container>
        <FormWrap>
          
            <FormContent>
                <Form action="#">
                    <FormH1>Look up into Doctor's detail</FormH1>
                    <FormLabel htmlFor='for'>Account address :</FormLabel>
                    <FormInput type='text' id='address' value={state.account} disabled />                    
                    <FormLabel htmlFor='to'>Name :</FormLabel>
                    <FormInput type='text' id='name' value={doctorData.name} disabled />
                    <FormLabel htmlFor='to'>License Number :</FormLabel>
                    <FormInput type='text' id='licenseno' value={doctorData.licenseno} disabled />
                    <FormLabel htmlFor='to'>Hospital Name :</FormLabel>
                    <FormInput type='text' id='hname' value={doctorData.hname} disabled />
                    <FormLabel htmlFor='to'>Faculty :</FormLabel>
                    <FormInput type='text' id='faculty' value={doctorData.faculty} disabled />
                    <FormLabel htmlFor='to'>Contact :</FormLabel>
                    <FormInput type='text' id='contact' value={doctorData.contact} disabled />

                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                                  
                      
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Ddetail;