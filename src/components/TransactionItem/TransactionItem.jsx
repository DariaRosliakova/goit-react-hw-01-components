import PropTypes from 'prop-types';
import { Item, Type } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => (
  <Item>
    <Type>{type}</Type>
    <td>{amount}</td>
    <td>{currency}</td>
  </Item>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
