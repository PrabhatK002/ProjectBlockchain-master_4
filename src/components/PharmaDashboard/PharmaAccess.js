import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './PharmaElements';
import { FormWrap } from './PharmaElements';
import { Icon } from './PharmaElements';
import { FormContent } from './PharmaElements';
import { Form } from './PharmaElements';
import { FormH1 } from './PharmaElements';
import { FormLabel } from './PharmaElements';
import { FormInput } from './PharmaElements';
import { FormButton } from './PharmaElements';
import { Text } from './PharmaElements';
import Footer from '../Footer';

import { useHistory, useNavigate } from 'react-router-dom';


const PharmaAccess = ({state}) => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();


  const checkAccess = async (event) => {
    event.preventDefault();
    const { provider, signer, contract } = state;
    console.log(contract);
    //provider.ensAddress = null;
    const addr = document.querySelector("#address").value;
  
    try {
      const records = await contract.getPatientRecords(addr);
      navigate.push({
        pathname: '/RecordsForPharma',
        state: { records }
      });
    } catch (error) {
      console.log(error);
      setAddress("");
      alert("Error accessing patient records. Please try again.");
    }
  }
  return (
    <>      
    <Container>
        <FormWrap>
          
            <FormContent>
                <Form id="access-form" onSubmit={checkAccess}>
                    <FormH1>Enter address of the Patient to access record</FormH1>
                    <FormLabel htmlFor='for'>Patient Address: </FormLabel>
                    <FormInput id="address" type={String} value={address} required/>
                    {/*<FormInput id="address" type={String} value={address} onChange={(e)=>setAddress(e.target.value)} />*/}
                    <FormButton type='submit'>Submit</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
      <Footer/>
    </>    
  );
};
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PharmaAccess />);*/

export default PharmaAccess;