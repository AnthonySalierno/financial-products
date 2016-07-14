$(document).ready(function() {
  // This function is called when the user types in the input field or selects from the dropdown
  const onUserEntry = function() {
    let list = document.getElementById('results');
    // Remove all child nodes each time this is called to prevent rendering duplicates
    while(list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
    let query = $('.input-field').val();
    $.get('/api/data', query)
      .done(function(data) {
        const filteredClass = $('#dropdown-menu').attr('class');
        _.each(data, function(item) {
          // Format type and product for class name by swapping spaces for dashes and lowercasing
          const typeFormattedForClassName = item.type.toLowerCase().replace(' ', '-');
          const productFormattedForClassName = item.product.toLowerCase().replace(' ', '-');
          // This conditional checks which elements to render based on what is selected in the dropdown
          if (!filteredClass || typeFormattedForClassName === filteredClass) {
            let div = $('<div />')
              .addClass('product')
              .attr('id', productFormattedForClassName)
              .addClass(typeFormattedForClassName)
              .html(function() {
                let regEx = new RegExp(query, 'i');
                return item.product.replace(regEx, '<u>$&</u>');
              });
            let description = ($('<p />'))
              .addClass('description')
              .html(item.description);
            let productType = ($('<p />'))
              .addClass('type')
              .addClass(typeFormattedForClassName)
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
