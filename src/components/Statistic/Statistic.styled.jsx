import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: ${props => props.theme.size(5)};
  width: ${props => props.theme.size(100)};
  text-align: center;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.boxShadow};
`;
