var thymeleaf = require('/lib/thymeleaf'); // Load template engine

var VIEW = resolve('hello.html') // Lookup template file

exports.get = function (req) {
  var model = { // Build model object
    title: 'Hello Web app',
    message: 'Views are working too!'
  };

  return {
    body: thymeleaf.render(VIEW, model) // Render page
  };
};
