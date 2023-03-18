import React from "react";
import { Container } from "./toLoginElements";
import { FormWrap } from "./toLoginElements";
import { Icon } from "./toLoginElements";
import { FormContent } from "./toLoginElements";
import { Form } from "./toLoginElements";
import { FormH1 } from "./toLoginElements";
import { FormLabel } from "./toLoginElements";
import { FormInput } from "./toLoginElements";
import { FormButton } from "./toLoginElements";

//import { Text } from "./LoginElements";
import Footer from "../Footer";
const PatLogin = (state) => {
  const patientLogin = async(event)=>{
    //event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    console.log(name, password);

    /*const transaction = await contract.patientLogin(name, password);
    await transaction.wait();
    console.log("Transaction is done.");*/

  }


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form onSubmit={patientLogin} action="/PatDashboard">
              <FormH1>Login as Patient</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput id="name" type={String} required />
              <FormLabel htmlFor="to">Password</FormLabel>
              <FormInput id="password" type="password" required />
              <FormButton type="submit" to="/PatDashboard">
                Register
              </FormButton>
              {/* <Text>Forgot Password</Text>
                      <Text>Sign Up</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default PatLogin;
