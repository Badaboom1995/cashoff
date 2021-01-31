import styled from "styled-components";

type StyledButtonProps = {
  disabled?: boolean;
  loading?: boolean;
};
export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  color: #fff;
  border-radius: 30px;
  background-color: ${(props) =>
    props.disabled || props.loading ? "#A2A2A2" : "#0094ff"};
  border: none;
  font-size: 18px;
  cursor: ${(props) => !props.disabled && "pointer"};
  &:active {
    background-color: #0083e0;
  }
  &:focus {
    outline: none;
  }
  img {
    width: 40px;
    position: absolute;
    left: -40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
type TextProps = {
  spinnerActive: boolean;
};
export const Text = styled.span<TextProps>`
  position: relative;
  color: ${(props) => props.spinnerActive && "transparent"};
`;
