const products = [
  {
    id: 1,
    product: 'Mortgage',
    type: 'Bank',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 2,
    product: 'Personal Loan',
    type: 'Bank',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 3,
    product: 'Checking Account',
    type: 'Bank',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 4,
    product: 'Savings Account',
    type: 'Bank',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 5,
    product: 'Credit Line',
    type: 'Credit Card',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 6,
    product: 'Cash Advance',
    type: 'Credit Card',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 7,
    product: 'Mutual Funds',
    type: 'Brokerage',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 8,
    product: '401(k)',
    type: 'Retirement',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 9,
    product: 'Pension',
    type: 'Retirement',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 10,
    product: 'Money Market Account',
    type: 'Bank',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 11,
    product: 'Certificate of Deposit (CD)',
    type: 'Bank',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 12,
    product: 'Pension',
    type: 'Brokerage',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 13,
    product: 'Exchange-Traded Funds (ETFs)',
    type: 'Brokerage',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 14,
    product: 'Mutual Funds',
    type: 'Brokerage',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 15,
    product: 'Bonds',
    type: 'Brokerage',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 16,
    product: 'Options',
    type: 'Brokerage',
    description: 'Lorem ipsum dolor sit amet...',
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
