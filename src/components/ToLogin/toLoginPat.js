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
const PatLogin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form action="/PatDashboard">
              <FormH1>Login as Patient</FormH1>
              <FormLabel htmlFor="for">UserID</FormLabel>
              <FormInput type={String} required />
              <FormLabel htmlFor="to">Password</FormLabel>
              <FormInput type="password" required />
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
