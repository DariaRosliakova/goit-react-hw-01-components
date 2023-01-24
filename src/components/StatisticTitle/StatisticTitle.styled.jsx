import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin: 0px;
  padding: ${props => props.theme.size(7)};
  color: ${props => props.theme.colors.secondaryText};
  font-weight: 500;
  font-size: ${props => props.theme.size(5)};
  line-height: calc(30 / 20);
`;
