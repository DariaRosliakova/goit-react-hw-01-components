import styled from '@emotion/styled';

export const StatsItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: ${props => props.theme.size(17)};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.size(3)};
`;
export const Percentage = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.size(5)};
`;
