$(document).ready(function() {
  $('.input-field').keyup(function() {
    let list = document.getElementById('results');
    while(list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
    let query = this.value;
    $.get('/api/data', query)
      .done(function(data) {
        _.each(data, function(item) {
          let div = $('<div />')
            .addClass('product')
            .attr('id', item.product.toLowerCase().replace(' ', '-'))
            .addClass(item.type.toLowerCase().replace(' ', '-'))
            .html(item.product)
          let p = ($('<p />'))
            .addClass('type')
            .addClass(item.type.toLowerCase().replace(' ', '-'))
            .html(item.type);
          div.append(p).appendTo($('#results'));
        });
        let divs = $("div > div");
        for (let j = 0; j < divs.length; j += 3) {
          divs.slice(j, j + 3).wrapAll("<div class='row'></div>");
        }
      })
  });
  $(document).on('mouseover', '.product', function() {

  })
});
