const test = require('tape');
const CLIEngine = require('eslint').CLIEngine;

const code = `
'use strict';
import t from 'module';
const foo = 1;
t(foo);
const bar = ['x', 'y', 'z'];
t(bar);
`;

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const lint = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js'
  }).executeOnText(code);

  const results = lint.results;
  const errorCount = lint.errorCount;
  const warningCount = lint.warningCount;

  t.equal(results.length, 1, 'One result (empty)');
  t.equal(results[0].messages.length, 0, 'No messages');
  t.equal(results[0].errorCount, 0, 'No result error count');
  t.equal(results[0].warningCount, 0, 'No result warning count');
  t.equal(errorCount, 0, 'Error count is 0');
  t.equal(warningCount, 0, 'Warning count count is 0');
  t.end();
});
