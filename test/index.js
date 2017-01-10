const test = require('tape');
const linter = require('./lib/test-lint');
const outdent = require('outdent')({ trimTrailingNewline: false });

// Note that none of this code actually makes sense as frontend code,
// but its just to lint for syntax / style

test('base config ok', (t) => {
  const code = outdent`
    import $ from 'react';

    const foo = 1;
    const bar = ['x', 'y', 'z'];
    const baz = { a: 1, b: 2 };

    $('#test').textContent = foo + bar[0] + baz.a;
  `;

  const lint = linter(code, 'index');
  t.ok(lint.ok, lint.message);
  t.end();
});

test('Cant do object rest spread with base', (t) => {
  const code = outdent`
    import $ from 'react';

    const foo = { a: 1 };
    const bar = { b: 1 };
    const baz = { ...foo, ...bar };

    $('#test').textContent = baz.a + baz.b;
  `;

  const lint = linter(code, 'index');
  t.notOk(lint.ok);
  t.equal(lint.message, '5:15 null `const baz = { ...foo, ...bar };` Parsing error: Unexpected token ...');
  t.end();
});

test('cant import unknown module', (t) => {
  const code = outdent`
    import $ from './notamodule';

    const foo = 1;
    const bar = ['x', 'y', 'z'];
    const baz = { a: 1, b: 2 };

    $('#test').textContent = foo + bar[0] + baz.a;
  `;

  const lint = linter(code, 'index');
  t.notOk(lint.ok);
  t.equal(lint.message, '1:15 import/no-unresolved `import $ from \'./notamodule\';` Unable to resolve path to module \'./notamodule\'.');
  t.end();
});

test('babel config (can do object rest spread)', (t) => {
  const code = outdent`
    import $ from 'react';

    const foo = { a: 1 };
    const bar = { b: 1 };
    const baz = { ...foo, ...bar };

    $('#test').textContent = baz.a + baz.b;
  `;

  const lint = linter(code, 'babel');
  t.ok(lint.ok, lint.message);
  t.end();
});

test('react config', (t) => {
  const code = outdent`
    import React from 'react';

    export default class Comp extends React.Component {
      render() {
        return (
          <div>
            <div>test</div>
          </div>
        );
      }
    }
  `;

  const lint = linter(code, 'react');
  t.ok(lint.ok, lint.message);
  t.end();
});

test('react-webpack config', (t) => {
  const code = outdent`
    import React from 'react';

    export default class Comp extends React.Component {
      render() {
        return (
          <div>
            <div>test</div>
          </div>
        );
      }
    }
  `;

  const lint = linter(code, 'react-webpack');
  t.ok(lint.ok, lint.message);
  t.end();
});

test('webpack config', (t) => {
  // TODO: make this do something with a webpack config parser
  const code = outdent`
    import $ from 'react';

    const foo = 1;
    const bar = ['x', 'y', 'z'];
    const baz = { a: 1, b: 2 };

    $('#test').textContent = foo + bar[0] + baz.a;
  `;

  const lint = linter(code, 'webpack');
  t.ok(lint.ok, lint.message);
  t.end();
});
