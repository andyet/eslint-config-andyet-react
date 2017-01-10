const path = require('path');
const CLIEngine = require('eslint').CLIEngine;

// eslint-disable-next-line no-undef
const dir = __dirname;

const displayMessage = (m) => `${m.line}:${m.column} ${m.ruleId} \`${m.source}\` ${m.message}`;

module.exports = function testLint(code, file) {
  const lint = new CLIEngine({
    useEslintrc: false,
    allowInlineConfig: true,
    cwd: path.resolve(dir, '..', '..'),
    configFile: `${file}.js`
  }).executeOnText(code);

  const { results: [result], errorCount, warningCount } = lint;

  const ok = lint.errorCount === 0 && lint.warningCount === 0;

  const message = result.messages.map(displayMessage).join(', ') || `No errors from ${file}.js config`;

  return {
    message,
    ok,
    errorCount,
    warningCount,
    result
  };
};
