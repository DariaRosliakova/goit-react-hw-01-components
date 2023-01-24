import styled from '@emotion/styled';

export const Card = styled.div`
  width: ${props => props.theme.size(75)};
  text-align: center;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  background-color: ${props => props.theme.colors.secondaryBackground};
`;
export const StatsItem = styled.li`
  display: flex;
  width: ${props => props.theme.size(25)};
  padding: ${props => props.theme.size(5)};
  flex-direction: column;
  gap: ${props => props.theme.size(2)};
  border: 1px solid ${props => props.theme.colors.border};
`;
export const Avatar = styled.img`
  display: inline-block;
  width: ${props => props.theme.size(44)};
  height: ${props => props.theme.size(44)};
  border-radius: 50%;
  margin: ${props => props.theme.size(5)};
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.size(4)};
  line-height: calc(30 / 16);
  margin: 0;
`;

export const Tag = styled.p`
  font-size: ${props => props.theme.size(4)};
  line-height: calc(30 / 16);
  color: ${props => props.theme.colors.secondaryText};
  margin: 0;
`;
export const Location = styled.p`
  color: ${props => props.theme.colors.secondaryText};
  font-size: ${props => props.theme.size(4)};
  line-height: calc(30 / 16);
  margin: 0px 0px 40px 0px;
`;

export const Lable = styled.span`
  color: ${props => props.theme.colors.secondaryText};
  font-size: ${props => props.theme.size(4)};
  line-height: calc(16 / 14);
`;
export const Quantity = styled.span`
  font-weight: 700;
  font-size: ${props => props.theme.size(4)};
  line-height: calc(23 / 20);
`;
