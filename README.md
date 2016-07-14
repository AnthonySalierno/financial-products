# financial-products

Anthony's Notes
-----------------
I used jQuery and Underscore for this coding challenge.  I spun up a simple server
using Node and Express to make AJAX requests.  I created a file called data.js
to function as my database.  That file also contained some logic for filtering
what information gets sent back to the client based on the query that the server
received (the entry in the text input field).  Users can also filter by product type
and the results that are shown will be re-rendered.

I implemented a fuzzy search here because I like the user experience when they aren't
sure what all the options are and can see some examples as they type any character.

Please let me know if you have any questions!

Instructions
-----------------
Write a one page app with a text input. When the user enters some text into
the text input, the app should use the data feed to search product names for
the term the user entered into the text input. When the results are returned
you should display the results in the same page (using templating engine).
We don't expect the results to look gorgeous, but some thought should be put
in to how the results are displayed so they are understandable by the user and
follow responsive layout. The products also have types such as bank, credit
card, etc. Use this data to further organize search results.


Additional Requirements
-----------------------------------
You may use a javascript library like jQuery, underscore, etc. to do DOM
manipulation and make AJAX requests as well as any plugins you like that
provide additional interesting functionality. You may not use any plugin
that already does for you a core part of this challenge, specifically, no
autocomplete plugins.

References
-----------------
javascript template engine: http://underscorejs.org/, http://handlebarsjs.com/

Deliverables
------------------
Please create a public github repo and check in your code there containing all
html, css and js files you are using in the project as well as a readme.txt
with any additional notes you want us to consider.
