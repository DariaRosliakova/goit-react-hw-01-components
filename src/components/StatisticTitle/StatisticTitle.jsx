import { Title } from './StatisticTitle.styled';
import PropTypes from 'prop-types';

export const StatisticTitle = ({ title }) => {
  if (title === undefined) {
    return null;
  } else {
    return <Title>{title}</Title>;
  }
};

StatisticTitle.propTypes = {
  title: PropTypes.string,
};
