import PropTypes from 'prop-types';
import { Table, Head } from './TransactionHistory.styled';
import { TransactionItem } from '../TransactionItem/TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionItem>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
