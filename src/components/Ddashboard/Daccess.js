import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
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
import Footer from '../Footer';
import { useHistory, useNavigate } from 'react-router-dom';

const Daccess = ({state}) => {
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
        pathname: '/RecordsForDoc',
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
root.render(<Daccess />);*/

export default Daccess;


