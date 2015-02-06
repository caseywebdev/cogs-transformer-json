var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.json': {
      path: 'test/input.json',
      buffer: helper.getFileBuffer('test/output.js'),
      hash: helper.getFileHash('test/output.js'),
      requires: [{
        path: 'test/input.json',
        hash: helper.getFileHash('test/input.json')
      }],
      links: [],
      globs: []
    },
    'test/error.json': Error
  }
});
