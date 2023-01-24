import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  margin-top: ${props => props.theme.size(5)};
  width: ${props => props.theme.size(200)};
  text-align: center;
  box-shadow: ${props => props.theme.boxShadow};
  padding: 0px;
`;
export const Head = styled.thead`
  height: ${props => props.theme.size(11)};
  background-color: ${props => props.theme.colors.tableHead};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: ${props => props.theme.size(3)};
  line-height: calc(16 / 14);
`;
