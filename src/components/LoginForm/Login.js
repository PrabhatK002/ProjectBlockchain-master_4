import React from "react";
import { Container } from "./LoginElements";
import { FormWrap } from "./LoginElements";
import { Icon } from "./LoginElements";
import { FormContent } from "./LoginElements";
import { Form } from "./LoginElements";
import { FormH1 } from "./LoginElements";
import { FormLabel } from "./LoginElements";
import { FormInput } from "./LoginElements";
import { FormButton } from "./LoginElements";

import { Text } from "./LoginElements";
import Footer from "../Footer";

import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

const LoginForm = ({ state }) => {

  const patientRegister = async()=>{
    //event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const gender = document.querySelector("#gender").value;
    const dob = document.querySelector("#dob").value;
    const password = document.querySelector("#password").value;

    console.log(name, phone, gender, dob);

    const transaction = await contract.addPatient(name, phone, gender, dob, password);
    await transaction.wait();
    console.log("Transaction is done.");

  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form onSubmit={patientRegister} action="/PatEntry">
              <FormH1>Sign Up to register as new patient</FormH1>
              <FormLabel  htmlFor="for">Name</FormLabel>
              <FormInput id="name" type={String} required />
              <FormLabel  htmlFor="for">Phone no:</FormLabel>
              <FormInput id="phone" type={String} required />
              <FormLabel  htmlFor="for">gender</FormLabel>
              <FormInput id="gender" type={String} required />
              <FormLabel  htmlFor="for">DOB</FormLabel>
              <FormInput id="dob" type={String} required />
              <FormLabel  htmlFor="to">Password</FormLabel>
              <FormInput id="password" type="password" required />
              <FormButton type="submit" to="/PatEntry">
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

export default LoginForm;