import React from "react";
import AddForm from "../features/AddForm";
import BanksList from "../features/BanksList";
import Filters from "../features/Filters";

import { Wrapper, LeftArea, RightArea } from "./styled";

function Main() {
  return (
    <Wrapper>
      <LeftArea>
        <Filters />
        <BanksList />
      </LeftArea>
      <RightArea>
        <AddForm />
      </RightArea>
    </Wrapper>
  );
}

export default Main;
