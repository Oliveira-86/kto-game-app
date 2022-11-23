import React from "react";
import { StyledButton, ButtonText } from "./styles";

import BeatLoader from "react-spinners/BeatLoader";
import theme from "../../global/theme";

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <ButtonText {...props} pointerEvents={false}>
        {!props.isLoading ? props.label : <BeatLoader  color={theme.colors.background} size={10} />}
      </ButtonText>
    </StyledButton>
  );
};

export default Button;
