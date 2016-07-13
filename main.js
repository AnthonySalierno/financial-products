$(document).ready(function() {
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
      product: 'Portfolio',
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
      type: 'Brokerage Account',
    },
  ];

  $('.input-field').keyup(function() {
    let entry = document.getElementById('results');
    while(entry.hasChildNodes()) {
      entry.removeChild(entry.childNodes[0]);
    }
    $('<div />')
      .html(this.value)
      .appendTo($('#results'));
  });

});
