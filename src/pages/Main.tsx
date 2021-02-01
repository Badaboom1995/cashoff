import React, { useState } from "react";
import AddForm from "../features/AddForm";
import BanksList from "../features/BanksList";
import Filters from "../features/Filters";
import { BankType } from "../shared/types";
import { Wrapper, LeftArea, RightArea } from "./styled";

function Main() {
  const [filters, setFilters] = useState({ bik: "", name: "" });
  const [banks, setBanks] = useState([]);
  const [selectedBank, selectBank] = useState(null);

  const addBank = (bank: BankType) => {
    const newBanksList: any = [...banks, bank];
    setBanks(newBanksList);
  };
  const addFilter = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
    console.log(filters);
  };

  const selectFilteredBanks: any = (banks: BankType[], filters: any) =>
    banks
      .filter((bank) => bank.name.includes(filters.name))
      .filter((bank) => bank.bik.includes(filters.bik));

  return (
    <Wrapper>
      <LeftArea>
        <Filters addFilter={addFilter} />
        <BanksList banks={selectFilteredBanks(banks, filters)} />
      </LeftArea>
      <RightArea>
        <AddForm handleSubmit={addBank} />
      </RightArea>
    </Wrapper>
  );
}

export default Main;
