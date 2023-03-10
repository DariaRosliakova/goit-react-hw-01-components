import { StatisticList } from '../StatisticList/StatisticList';
import { StatisticTitle } from '../StatisticTitle/StatisticTitle';
import { Section } from './Statistic.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <Section>
      {title && <StatisticTitle title={title} />}
      <StatisticList stats={stats} />
    </Section>
  );
};
