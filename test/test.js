var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.json': helper.getFileBuffer('test/output.js'),
    'test/error.json': Error
  }
});
