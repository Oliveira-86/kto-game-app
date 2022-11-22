import React from "react";
import { StyledButton, ButtonText,  } from "./styles";

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <ButtonText {...props} pointerEvents={false}>
        {props.label}
      </ButtonText>
    </StyledButton>
  );
};

export default Button;
