import React, { InputHTMLAttributes } from "react";
import { Field, FieldInputProps, useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

type inputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label : string;
};

const InputField: React.FC<inputFieldProps> = ({label, size:_,...props}) => {
  const [field, { error}] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name} >{label}</FormLabel>
      <Input {...field} id={field.name} {...props}placeholder={props.placeholder} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField