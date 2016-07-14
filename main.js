$(document).ready(function() {
  $('.input-field').keyup(function() {
    let list = document.getElementById('results');
    while(list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
    let query = this.value;
    $.get('/api/data', query)
      .done(function(data) {
        _.each(data, function(product) {
          let entry = $('<div />')
            .addClass('product')
            .attr('id', product.toLowerCase().replace(' ', '-'))
            .addClass(product.toLowerCase().replace(' ', '-'))
            .html(product);
          entry.appendTo($('#results'));
        });
        let divs = $("div > div");
        for (let j = 0; j < divs.length; j += 3) {
          divs.slice(j, j + 3).wrapAll("<div class='row'></div>");
        }
      })
  });
});
