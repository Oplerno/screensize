var url = 'https://www.google.com/';

var system = require('system');
if ( system.args.length != 1 ) {
  url = system.args[1];
}

exports.page = require('webpage').create();

exports.render = function(width, height) {
  exports.page.viewportSize = {
    width: width,
    height: height
  };
}

exports.fetch = function() {
  exports.page.open( url, function() {
      exports.page.render('output/'+ url.split('/')[2] + '-' + exports.page.viewportSize.width +'x'+ exports.page.viewportSize.height +'.png');
      phantom.exit();
  });
}

