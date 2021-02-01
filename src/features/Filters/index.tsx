import React from "react";
import { Wrapper, TextInput, Title } from "./styled";

interface IFilters {
  addFilter: any;
}

function Filters({ addFilter }: IFilters) {
  return (
    <Wrapper>
      <Title>Фильтры</Title>
      <TextInput
        type="text"
        placeholder="По названию"
        onChange={(e) => {
          addFilter("name", e.target.value);
        }}
      />
      <TextInput
        type="text"
        placeholder="По БИК"
        onChange={(e) => {
          addFilter("bik", e.target.value);
        }}
      />
    </Wrapper>
  );
}
export default Filters;
