const _ = require('underscore');

const DEFAULTS = {
  before: 'export default ',
  after: ';\n'
};

module.exports = (file, options, cb) => {
  try {
    const source = file.buffer.toString();

    // Validate JSON.
    JSON.parse(source);

    options = _.extend({}, DEFAULTS, options);
    cb(null, {
      buffer: new Buffer(options.before + source.trim() + options.after)
    });
  } catch (er) { return cb(er); }
};
