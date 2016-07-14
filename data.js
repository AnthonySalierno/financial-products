const products = [
  {
    id: 1,
    product: 'Mortgage',
    type: 'Bank',
  },
  {
    id: 2,
    product: 'Personal Loan',
    type: 'Bank',
  },
  {
    id: 3,
    product: 'Checking Account',
    type: 'Bank',
  },
  {
    id: 4,
    product: 'Savings Account',
    type: 'Bank',
  },
  {
    id: 5,
    product: 'Credit Line',
    type: 'Credit Card',
  },
  {
    id: 6,
    product: 'Cash Advance',
    type: 'Credit Card',
  },
  {
    id: 7,
    product: 'Mutual Funds',
    type: 'Brokerage Account',
  },
  {
    id: 8,
    product: '401(k)',
    type: 'Retirement Account',
  },
  {
    id: 9,
    product: 'Pension',
    type: 'Retirement Account',
  },
  {
    id: 10,
    product: 'Money Market Account',
    type: 'Bank',
  },
  {
    id: 11,
    product: 'Certificate of Deposit (CD)',
    type: 'Bank',
  },
  {
    id: 12,
    product: 'Pension',
    type: 'Brokerage Account',
  },
  {
    id: 13,
    product: 'Exchange-Traded Funds (ETFs)',
    type: 'Brokerage Account',
  },
  {
    id: 14,
    product: 'Mutual Funds',
    type: 'Brokerage Account',
  },
  {
    id: 15,
    product: 'Bonds',
    type: 'Brokerage Account',
  },
  {
    id: 16,
    product: 'Options',
    type: 'Brokerage Account',
  },
];

exports.findProducts = (query) => {
  let results = [];
  for (let i = 0; i < products.length; i++) {
    let regEx = new RegExp(query, 'i');
    if (query && products[i].product.match(regEx)) {
      results.push(products[i]);
    }
  }
  return results;
};
