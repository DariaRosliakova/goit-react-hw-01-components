import styled from '@emotion/styled';

const setBgColor = props => {
  return props.isOnline
    ? `${props.theme.colors.online}`
    : `${props.theme.colors.offline}`;
};
export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.size(1)};
  height: ${props => props.theme.size(15)};
  box-shadow: ${props => props.theme.boxShadow};
  gap: ${props => props.theme.size(4)};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  width: ${props => props.theme.size(12)};
  height: ${props => props.theme.size(13)};
`;

export const Name = styled.p`
  font-size: ${props => props.theme.size(5)};
  font-weight: 500;
  line-height: calc(20 / 16);
`;
