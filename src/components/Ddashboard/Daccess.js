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
import { FormError } from './DdashboardElements';
import Footer from '../Footer';
import { useHistory, useNavigate } from 'react-router-dom';
import RecordsByDoc from './RecordsByDoc';

const Daccess = ({state}) => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  //const [address, setAddress] = useState("");
  const navigate = useNavigate();

  {/*const isValidEthereumAddress = (address) => {
    return /^(0x)?[0-9a-fA-F]{40}$/.test(address);
  };*/}

  const checkAccess = async (event) => {
    event.preventDefault();
    const { provider, signer, contract } = state;

    const _addr = document.querySelector("#address").value;
    console.log("Calling getPatientRecords function with address:", _addr);

   { /*if (!isValidEthereumAddress(address)) {
      setError("Please enter a valid Ethereum address.");
      setShowError(true);
      return;
    }*/}

    try {
      const records = await contract.getPatientRecords(_addr);
      console.log("Received records:", records);
      if(records){
        navigate("/RecordsForDoc", { state: records });
      }
      /*if(records){
        navigate("/RecordsForDoc",
          {state:  records} ,
        );}*/
    } catch (error) {
      //setAddress("");
      console.error("Error accessing patient records:", error);
      setError("Error accessing patient records. Please try again.");
      setShowError(true);
    }
  };

  const handleOkClick = () => {
    setShowError(false);
    document.getElementById("access-form").reset();
    setError("");
  };
  return (
    <>      
    <Container>
        <FormWrap>
          
            <FormContent>
                <Form id="access-form" onSubmit={checkAccess}>
                    <FormH1>Enter address of the Patient to access record</FormH1>
                    <FormLabel htmlFor='for'>Patient Address: </FormLabel>
                    <FormInput id="address" type={String} required/>
                    {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}
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


