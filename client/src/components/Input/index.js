import React from "react";
import theme from "../../global/theme";
import { Label, InputStyle } from "./styles";

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
    </>
  );
};

export default Input;
