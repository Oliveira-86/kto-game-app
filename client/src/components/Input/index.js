import React from "react";
import theme from "../../global/theme";
import { Label, InputStyle, ErrorMessage } from "./styles";

const Input = (props) => {
  return (
    <>
      <Label>
        {props.label}
        <InputStyle
          {...props}
          bigRight={props.bigRight}
          onFocus={props.onFocus}
          placeholderTextColor={theme.colors.grey}
        />
      </Label>
      {props.error && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </>
  );
};

export default Input;
