import path from 'path';
import { fileURLToPath } from 'url';
import { askForExtensionName, askForExtensionDescription, askForExtensionPublisher, askForGit, askForInstallDependencies, askForPackageManager } from './prompts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const id = "ext-ts";
export const name = "New Extension (TypeScript)";
export const insidersName = "New Extension (TypeScript)";

export const generateExtTs = (generator, extensionConfig) => {
  const templatePath = path.join(__dirname, 'templates', 'ext-ts');
  generator.sourceRoot(templatePath);
  
  const files = [
    'package.json',
    'tsconfig.json',
    'webpack.config.js',
    'main.ts',
    'renderer.tsx',
    'babel.config.js',
    'README.md',
    '.biomeignore',
    
  ];

  files.forEach(file => {
    generator.fs.copyTpl(
      generator.templatePath(file),
      generator.destinationPath(`${extensionConfig.name}/${file}`),
      extensionConfig
    );
  });

  // Copy gitignore separately since it needs to be renamed
  generator.fs.copy(
    generator.templatePath('gitignore'),
    generator.destinationPath(`${extensionConfig.name}/.gitignore`)
  );
};

export const prompting = async (generator, extensionConfig) => {
  await askForExtensionName(generator, extensionConfig);
  await askForExtensionDescription(generator, extensionConfig);
  await askForExtensionPublisher(generator, extensionConfig);
  await askForGit(generator, extensionConfig);
  await askForInstallDependencies(generator, extensionConfig);
  await askForPackageManager(generator, extensionConfig);
};

export const writing = (generator, extensionConfig) => {
  const { gitInit, name } = extensionConfig;
  const { fs } = generator;
  
  if (gitInit) {
    fs.copy(generator.sourceRoot() + "/gitignore", name + "/.gitignore");
  }
  
  fs.copyTpl(generator.sourceRoot() + "/README.md", name + "/README.md", extensionConfig);
  fs.copyTpl(generator.sourceRoot() + "/tsconfig.json", name + "/tsconfig.json", extensionConfig);
  fs.copyTpl(generator.sourceRoot() + "/main.ts", name + "/main.ts", extensionConfig);
  fs.copyTpl(generator.sourceRoot() + "/renderer.tsx", name + "/renderer.tsx", extensionConfig);
  fs.copyTpl(generator.sourceRoot() + "/package.json", name + "/package.json", extensionConfig);
  fs.copyTpl(generator.sourceRoot() + "/webpack.config.js", name + "/webpack.config.js", extensionConfig);
  fs.copyTpl(generator.sourceRoot() + "/babel.config.js", name + "/babel.config.js", extensionConfig);
};
