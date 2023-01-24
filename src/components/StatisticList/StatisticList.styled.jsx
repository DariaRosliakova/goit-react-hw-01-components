import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: grid;
  list-style: none;
  padding: 0px;
  margin: 0px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.theme.size(12)}, auto)
  );
`;
