var _ = require('underscore');
var babel = require('cogs-transformer-babel');

var DEFAULTS = {
  modules: 'umd'
};

module.exports = function (file, options, cb) {
  var source = file.buffer.toString();

  // Validate JSON.
  try { JSON.parse(source); } catch (er) { return cb(er); }

  source = 'export default ' + source;
  options = _.extend({}, DEFAULTS, options);
  babel(_.extend({}, file, {buffer: new Buffer(source)}), options, cb);
};
