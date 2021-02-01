import React from "react";
import { Wrapper, Table, THead, Row, Cell } from "./styled";
import { BankType } from "../../shared/types";
import BankItem from "./views/BankItem";

interface IBanksList {
  banks: BankType[];
  deleteBank: (id: string) => void;
  chooseBank: (id: string) => void;
}

function BanksList({ banks, chooseBank, deleteBank }: IBanksList) {
  return (
    <Wrapper>
      <Table>
        <THead>
          <Row>
            <Cell>Название</Cell>
            <Cell>БИК</Cell>
            <Cell>Корсчет</Cell>
            <Cell>Адрес</Cell>
          </Row>
        </THead>
        <tbody>
          {banks.map((bank) => (
            <BankItem
              key={bank.bik}
              bank={bank}
              chooseBank={chooseBank}
              deleteBank={deleteBank}
            />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
export default BanksList;
