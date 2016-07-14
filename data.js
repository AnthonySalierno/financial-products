// The products array below functions as a database for this application

const products = [
  {
    id: 1,
    product: 'Mortgage',
    type: 'Bank',
    description: 'Mortgage lorem ipsum dolor sit amet...',
  },
  {
    id: 2,
    product: 'Personal Loan',
    type: 'Bank',
    description: 'Personal Loan lorem ipsum dolor sit amet...',
  },
  {
    id: 3,
    product: 'Checking Account',
    type: 'Bank',
    description: 'Checking Account lorem ipsum dolor sit amet...',
  },
  {
    id: 4,
    product: 'Savings Account',
    type: 'Bank',
    description: 'Savings Account lorem ipsum dolor sit amet...',
  },
  {
    id: 5,
    product: 'Credit Line',
    type: 'Credit Card',
    description: 'Credit Line lorem ipsum dolor sit amet...',
  },
  {
    id: 6,
    product: 'Cash Advance',
    type: 'Credit Card',
    description: 'Cash advance lorem ipsum dolor sit amet...',
  },
  {
    id: 7,
    product: 'Mutual Funds',
    type: 'Brokerage',
    description: 'Mutual Funds lorem ipsum dolor sit amet...',
  },
  {
    id: 8,
    product: '401(k)',
    type: 'Retirement',
    description: '401(k) lorem ipsum dolor sit amet...',
  },
  {
    id: 9,
    product: 'Pension',
    type: 'Retirement',
    description: 'Pension lorem ipsum dolor sit amet...',
  },
  {
    id: 10,
    product: 'Money Market Account',
    type: 'Bank',
    description: 'Money Market Account lorem ipsum dolor sit amet...',
  },
  {
    id: 11,
    product: 'Certificate of Deposit (CD)',
    type: 'Bank',
    description: 'Certificate of Depost (CD) lorem ipsum dolor sit amet...',
  },
  {
    id: 12,
    product: 'Pension',
    type: 'Brokerage',
    description: 'Pension lorem ipsum dolor sit amet...',
  },
  {
    id: 13,
    product: 'Exchange-Traded Funds (ETFs)',
    type: 'Brokerage',
    description: 'Exchange-Traded Funds (ETFs) lorem ipsum dolor sit amet...',
  },
  {
    id: 14,
    product: 'Mutual Funds',
    type: 'Brokerage',
    description: 'Mutual Funds lorem ipsum dolor sit amet...',
  },
  {
    id: 15,
    product: 'Bonds',
    type: 'Brokerage',
    description: 'Bonds lorem ipsum dolor sit amet...',
  },
  {
    id: 16,
    product: 'Options',
    type: 'Brokerage',
    description: 'Options lorem ipsum dolor sit amet...',
  },
];

// This function filters which products to send back to the client
// to avoid doing the filtering on the client-side
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
