import React from "react";
import { StyledButton, Text } from "./styled";
import spinner from "./assets/spinner.gif";
import { ButtonProps } from "./types";

function Button({ children, disabled, onClick, type, loading }: ButtonProps) {
  return (
    <StyledButton disabled={disabled || loading} onClick={onClick} type={type}>
      <Text spinnerActive={loading ? true : false}>
        {loading && <img src={spinner} alt="loader" />}
        {children}
      </Text>
    </StyledButton>
  );
}
export default Button;
