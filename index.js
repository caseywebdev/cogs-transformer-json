const _ = require('underscore');

const DEFAULTS = {
  before: 'export default ',
  after: ';\n'
};

module.exports = ({file: {buffer}, options}) => {
  let source = buffer.toString();

  // Validate JSON.
  JSON.parse(source);
  const {before, after} = _.extend({}, DEFAULTS, options);
  return {buffer: Buffer.from(before + source.trim() + after)};
};
