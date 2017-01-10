const path = require('path')
const CLIEngine = require('eslint').CLIEngine

module.exports = function (code, file) {
  const lint = new CLIEngine({
    useEslintrc: false,
    allowInlineConfig: true,
    cwd: path.resolve(__dirname, '..', '..'),
    configFile: `${file}.js`
  }).executeOnText(code);

  const { results: [result], errorCount, warningCount } = lint

  const ok = lint.errorCount === 0 && lint.warningCount === 0;

  const message = result.messages.map((m) => {
    return `${m.line}:${m.column} ${m.ruleId} \`${m.source}\` ${m.message}`
  }).join(', ') || `No errors from ${file}.js config`

  return {
    message,
    ok,
    errorCount,
    warningCount,
    result
  }
}
