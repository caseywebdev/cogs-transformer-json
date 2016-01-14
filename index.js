'use strict';

const _ = require('underscore');

const DEFAULTS = {
  before: 'export default ',
  after: ';\n'
};

module.exports = (file, options, cb) => {
  try {
    let source = file.buffer.toString();

    // Validate JSON.
    JSON.parse(source);
    options = _.extend({}, DEFAULTS, options);
    source = options.before + source.trim() + options.after;
    cb(null, {buffer: new Buffer(source)});
  } catch (er) { return cb(er); }
};
