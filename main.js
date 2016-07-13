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
    let list = document.getElementById('results');
    while(list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
    let value = this.value;
    for (let i = 0; i < products.length; i++) {
      let regEx = new RegExp(value, 'i');
      if (value !== '' && products[i].product.match(regEx)) {
        let entry = $('<div />')
          .addClass('product')
          .attr('id', products[i].product.toLowerCase().replace(' ', '-'))
          .addClass(products[i].type.toLowerCase().replace(' ', '-'))
          .html(products[i].product);
        entry.appendTo($('#results'));
      }
    }
  });

});
