import styled from '@emotion/styled';

export const FrdList = styled.ul`
  margin-top: ${props => props.theme.size(5)};
  width: ${props => props.theme.size(70)};
  gap: ${props => props.theme.size(3)};
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;
