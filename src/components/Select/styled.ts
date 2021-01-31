import styled from "styled-components";
import arrow from "./assets/arrow.svg";
import { Field } from "formik";

type SelectBoxProps = {
  selected: boolean;
};
export const SelectBox = styled.div<SelectBoxProps>`
  position: relative;
  display: block;
  background-color: #f5f8fa;
  padding: 15px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  color: ${(props) => !props.selected && "#A2A2A2"};
  cursor: pointer;
  transition: 0.3s all ease;
  transform: rotate(0deg);
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 21px;
    top: 21px;
    width: 11px;
    height: 11px;
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    transition: 0.3s transform ease;
  }
`;
type WrapperProps = {
  open: boolean;
};
export const OptionsContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-height: 220px;
  box-sizing: border-box;
  overflow: scroll;
  position: absolute;
  top: 55px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 3px 8px #00000026;
  padding: 5px 0;
`;

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  ${OptionsContainer} {
    display: ${(props) => (props.open ? "block" : "none")};
  }
  ${SelectBox}:after {
    transform: ${(props) => props.open && "rotate(-180deg)"};
  }
`;
export const Option = styled.label`
  display: block;
  padding: 9px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f5f8fa;
  }

  &:active {
    background-color: #e4ecf1;
  }
`;
export const OptionTitle = styled.span`
  font-size: 14px;
`;
export const Radio = styled(Field)`
  display: none;
`;
