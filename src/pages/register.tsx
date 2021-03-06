import React from "react";
import { Form, Formik } from "formik";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { Box, Button } from "@chakra-ui/react";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../util/toErrorMap";
import { useRouter } from "next/router";

interface registerProps {}

const register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  const router = useRouter();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          const response = await register({
            username: values.username,
            password: values.password,
          });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            router.push("/");
          }
          console.log(response);
        }}
      >
        {({ values, handleChange, isSubmitting }) => {
          return (
            <Form>
              <InputField
                name="username"
                placeholder="username"
                label="username"
              />
              <Box mt={4}>
                <InputField
                  name="password"
                  placeholder="password"
                  label="password"
                  type="password"
                />
              </Box>
              <Box mt={4}>
                <Button
                  isLoading={isSubmitting}
                  type="submit"
                  colorScheme="teal"
                  color="white"
                  size="lg"
                  variatn="solid"
                >
                  register
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default register;
