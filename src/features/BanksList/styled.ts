import styled from "styled-components";
import { Card } from "../../components/styled";

export const Wrapper = styled(Card)`
  flex-grow: 1;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const THead = styled.thead`
  font-weight: bold;
  border-bottom: 1px solid #dfdfdf;
`;
export const TBody = styled.tbody`
  font-weight: normal;
`;
type RowProps = {
  clickable?: boolean;
};
export const Row = styled.tr<RowProps>`
  cursor: ${(props) => props.clickable && "pointer"};
  &:nth-child(2n + 2) {
    background-color: #f6f6f6;
  }
`;
export const Cell = styled.td`
  width: 25%;
  padding: 10px;
  overflow: scroll;
`;
