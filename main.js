$(document).ready(function() {
  const onUserEntry = function() {
    let list = document.getElementById('results');
    while(list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
    let query = $('.input-field').val();
    $.get('/api/data', query)
      .done(function(data) {
        const filteredClass = $('#dropdown-menu').attr('class');
        _.each(data, function(item) {
          if (!filteredClass || item.type.toLowerCase().replace(' ', '-') === filteredClass) {
            let div = $('<div />')
              .addClass('product')
              .attr('id', item.product.toLowerCase().replace(' ', '-'))
              .addClass(item.type.toLowerCase().replace(' ', '-'))
              .html(function() {
                let regEx = new RegExp(query, 'i');
                return item.product.replace(regEx, '<u>$&</u>');
              });
            let description = ($('<p />'))
              .addClass('description')
              .html(item.description);
            let productType = ($('<p />'))
              .addClass('type')
              .addClass(item.type.toLowerCase().replace(' ', '-'))
              .html(item.type);
            div.append(description).append(productType).appendTo($('#results'));
          }
        });
        let divs = $("div > div");
        for (let j = 0; j < divs.length; j += 3) {
          divs.slice(j, j + 3).wrapAll("<div class='row'></div>");
        }
      })
  };

  $('.input-field').keyup(onUserEntry);

  $(document).on('change', '#dropdown-menu', function() {
    let selected = document.getElementById('dropdown-menu');
    let value = selected.options[selected.selectedIndex].value;
    $('#dropdown-menu')
      .removeClass()
      .addClass(value.toLowerCase().replace(' ', '-'));
    onUserEntry();
  });

});
