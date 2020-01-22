var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
}
# good work
if (module == require.main) require('test').run(test);
