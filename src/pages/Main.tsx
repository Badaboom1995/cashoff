import React, { useState } from "react";
import Popup from "../components/Popup";
import AddForm from "../features/AddForm";
import BanksList from "../features/BanksList";
import Filters from "../features/Filters";
import { BankType } from "../shared/types";
import { Wrapper, LeftArea, RightArea } from "./styled";

function Main() {
  const [filters, setFilters] = useState({ bik: "", name: "" });
  const [banks, setBanks] = useState([]);
  const [selectedBank, selectBank] = useState(0);

  const addBank = (bank: BankType) => {
    const newBank = { ...bank, id: bank.bik };
    const newBanksList: any = [...banks, newBank];
    setBanks(newBanksList);
  };
  const editBank = (bank: BankType) => {
    const editedBanks: any = banks.map((item: any) =>
      item.id === bank.id ? bank : item
    );
    setBanks(editedBanks);
    selectBank(0);
  };
  const deleteBank = (id: string) => {
    setBanks(banks.filter((bank: BankType) => bank.id !== id));
  };
  const chooseBank = (id: string) => {
    selectBank(parseInt(id));
  };
  const addFilter = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };
  const selectFilteredBanks: any = (banks: BankType[], filters: any) =>
    banks
      .filter((bank) => bank.name.includes(filters.name))
      .filter((bank) => bank.bik.includes(filters.bik));
  const selectBankById = (bank: BankType) => parseInt(bank.id) === selectedBank;

  return (
    <Wrapper>
      <LeftArea>
        <Filters addFilter={addFilter} />
        <BanksList
          deleteBank={deleteBank}
          chooseBank={chooseBank}
          banks={selectFilteredBanks(banks, filters)}
        />
      </LeftArea>
      <RightArea>
        <AddForm handleSubmit={addBank} />
        {banks.find(selectBankById) && (
          <Popup>
            <button
              onClick={() => {
                selectBank(0);
              }}
            >
              close
            </button>
            <AddForm
              handleSubmit={editBank}
              initialValues={banks.find(selectBankById)}
            />
          </Popup>
        )}
      </RightArea>
    </Wrapper>
  );
}

export default Main;
