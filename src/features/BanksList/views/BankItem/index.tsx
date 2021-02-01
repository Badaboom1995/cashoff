import React from "react";
import { BankType } from "../../../../shared/types";
import { Row, Cell } from "../../styled";

interface IBankItem {
  bank: BankType;
  chooseBank: (id: string) => void;
  deleteBank: (id: string) => void;
}

function BankItem({ bank, chooseBank, deleteBank }: IBankItem) {
  return (
    <Row
      clickable
      onClick={() => {
        chooseBank(bank.id);
      }}
    >
      <Cell>{bank.name}</Cell>
      <Cell>{bank.bik}</Cell>
      <Cell>{bank.kor}</Cell>
      <Cell>{bank.adress}</Cell>
      <Cell>
        <button
          onClick={() => {
            deleteBank(bank.id);
          }}
        >
          delete
        </button>
      </Cell>
    </Row>
  );
}
export default BankItem;
