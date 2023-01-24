import PropTypes from 'prop-types';
import { StatList } from './StatisticList.styled';
import { StatisticItem } from '../StatisticItem/StatisticItem';

export const StatisticList = ({ stats }) => {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem
          key={id}
          label={label}
          percentage={percentage}
        ></StatisticItem>
      ))}
    </StatList>
  );
};

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
