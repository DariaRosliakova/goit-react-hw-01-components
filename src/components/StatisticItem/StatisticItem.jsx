import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../utils/getRandomBgColor';
import { StatsItem, Label, Percentage } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => (
  <StatsItem
    style={{
      backgroundColor: getRandomHexColor(),
    }}
  >
    <Label>{label}</Label>
    <Percentage>{percentage}%</Percentage>
  </StatsItem>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
