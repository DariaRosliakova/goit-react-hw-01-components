import styled from '@emotion/styled';

export const Item = styled.tr`
  height: ${props => props.theme.size(11)};
  :nth-of-type(odd) {
    background-color: ${props => props.theme.colors.background};
  }
  :nth-of-type(even) {
    background-color: ${props => props.theme.colors.tableEven};
  }
  color: ${props => props.theme.colors.secondaryText};
`;

export const Type = styled.td`
  ::first-letter {
    text-transform: uppercase;
  }
`;
