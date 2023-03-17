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
//import { Text } from "./toLoginElements";
import Footer from "../Footer";

const ResLogin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form action="/ResDashboard">
              <FormH1>Login as Pharmacy</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type={String} required />
              <FormLabel htmlFor="to">Liscence no:</FormLabel>
              <FormInput type={String} required />

              <FormButton type="submit" to="/ResDashboard">
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

export default ResLogin;
