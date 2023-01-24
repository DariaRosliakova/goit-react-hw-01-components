export const theme = Object.freeze({
  colors: {
    secondaryText: '#01010180',
    background: '#f5f4fa',
    secondaryBackground: '#e0e0e0',
    online: '#44dc26',
    offline: '#dc2626',
    tableEven: '#cceae0',
    tableHead: '#0094e4b3',
    white: '#fff',
    border: 'rgba(0, 0, 0, 0.12)',
  },
  size: value => `${4 * value}px`,
  boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)`,
});
