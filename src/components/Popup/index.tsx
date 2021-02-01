import React from "react";
import { Wrapper, Content } from "./styled";

function Popup(props: any) {
  return (
    <Wrapper>
      <Content>{props.children}</Content>
    </Wrapper>
  );
}
export default Popup;
