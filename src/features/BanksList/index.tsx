import React from "react";
import { Wrapper, Table, THead, Row, Cell } from "./styled";
import { BankType } from "../../shared/types";
import BankItem from "./views/BankItem";

interface IBanksList {
  banks: BankType[];
}

function BanksList({ banks }: IBanksList) {
  return (
    <Wrapper>
      <Table>
        <THead>
          <Row>
            <Cell>Название</Cell>
            <Cell>Бик</Cell>
            <Cell>Корсчет</Cell>
            <Cell>Адрес</Cell>
          </Row>
        </THead>
        <tbody>
          {banks.map((bank) => (
            <BankItem key={bank.bik} bank={bank} />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
export default BanksList;
