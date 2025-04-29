import assert from 'yeoman-assert';
import { create } from 'yeoman-test';

test('ext-ts generator works as expected', async () => {
  const name = 'my-test-ext';
  const description = 'Test extension';
  const publisher = '@test/test';

  await create(import('../generators/app/index.js'))
    .withOptions({
      extensionName: name,
      extensionDescription: description,
      extensionPublisher: publisher,
    })
    .withPrompts({
      name,
      description,
      publisher,
      gitInit: false,
      installDependencies: false,
      pkgManager: 'npm',
    });

  assert.file([
    `${name}/package.json`,
    `${name}/tsconfig.json`,
    `${name}/webpack.config.js`,
    `${name}/main.ts`,
    `${name}/renderer.tsx`,
  ]);

  assert.jsonFileContent(`${name}/package.json`, {
    name,
    description,
    publisher,
  });
});
