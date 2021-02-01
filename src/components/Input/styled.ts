import styled from "styled-components";
import { Field } from "formik";

export const Wrapper = styled.div`
  font-family: "Roboto";
`;
type InputProps = {
  error?: string;
  touched: 0 | 1;
};

export const StyledInput = styled(Field)<InputProps>`
  color: ${(props) => props.error && props.touched === 1 && "#A2A2A2"};
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #a2a2a2;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #a2a2a2;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #a2a2a2;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #a2a2a2;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
export const ErrorText = styled.p`
  color: #e82828;
  font-size: 10px;
  padding-left: 15px;
  margin: 4px 0px;
  min-height: 12px;
  font-family: "Roboto";
`;
type InputInputContainerProps = {
  icon?: string;
};
export const InputContainer = styled.label<InputInputContainerProps>`
  display: flex;
  align-items: center;
  background-color: #f5f8fa;
  padding: 15px;
  border-radius: 8px;
  &:hover {
    cursor: #a2a2a2;
  }
  &:before {
    content: "";
    display: ${(props) => (props.icon ? "inline-block" : "none")};
    width: 20px;
    height: 20px;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 14px;
  }
`;
