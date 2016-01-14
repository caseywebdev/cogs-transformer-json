const _ = require('underscore');

const DEFAULTS = {
  before: 'export default ',
  after: ';\n'
};

module.exports = (file, options, cb) => {
  const source = file.buffer.toString();

  // Validate JSON.
  try { JSON.parse(source); } catch (er) { return cb(er); }

  options = _.extend({}, DEFAULTS, options);
  cb(null, {
    buffer: new Buffer(options.before + source.trim() + options.after)
  });
};
