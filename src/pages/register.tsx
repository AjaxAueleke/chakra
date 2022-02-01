import React from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import Wrapper from "../components/Wrapper";

interface registerProps {}

const register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant = "small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => {
        return(<Form>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                value={values.username}
                onChnage={handleChange}
                id="username"
                placeholder="username"
              />
              {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
            </FormControl>
          </Form>)
        }}
      </Formik>
    </Wrapper>
  );
};

export default register;
