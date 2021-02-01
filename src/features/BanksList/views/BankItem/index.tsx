import React from "react";
import { BankType } from "../../../../shared/types";
import { Row, Cell } from "../../styled";

interface IBankItem {
  bank: BankType;
}

function BankItem({ bank }: IBankItem) {
  return (
    <Row>
      <Cell>{bank.name}</Cell>
      <Cell>{bank.bik}</Cell>
      <Cell>{bank.kor}</Cell>
      <Cell>{bank.adress}</Cell>
    </Row>
  );
}
export default BankItem;
